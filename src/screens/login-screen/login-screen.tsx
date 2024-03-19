import { Component } from "react";
import { AppDispatch, RootState } from "../../redux/store";
import { connect } from "react-redux";
import { TouchableOpacity, View, Text, ActivityIndicator, TextInput, Alert, Image } from "react-native";
import { style } from "./style";
import ClientSecret from "../../constants/client-secrets/client-secret";
import SalesforceManager from "../../api-manager/salesforce-manager/salesforce-manager";
import { DomainUrl } from "../../constants/domain-urls/domain-url";
import { setUsername } from "../../redux/reducers/persistant-reducer";

interface LoginScreenProps {
    setUserName: (name: string) => void;
    getUserName: string;
    navigation: any;
}

interface LoginScreenStates {
    userName: string;
    passWord: string;
    isLoading: boolean;
    checked: boolean;
    url: string;
}

class LoginScreen extends Component<LoginScreenProps, LoginScreenStates> {
    constructor(props: LoginScreenProps) {
        super(props);
        this.state = {
            userName: "",
            passWord: "",
            isLoading: false,
            checked: false,
            url: ''
        }
    }

    componentDidMount() {
        this.props.getUserName ? this.setState({ userName: this.props.getUserName }) : null
        this.setState({ url: DomainUrl.mydomain })
    }

    callApi = async () => {
        this.setState({ isLoading: true })
        let credentials = {
            userName: this.state.userName,
            passWord: this.state.passWord
        }
        var formdata = new FormData();
        formdata.append("username", credentials?.userName);
        formdata.append("password", credentials?.passWord);
        formdata.append("grant_type", "password");
        formdata.append("client_id", ClientSecret.client_id);
        formdata.append("client_secret", ClientSecret.client_secret);
        console.log("formdata on loginScreen=", formdata);

        SalesforceManager.Login(
            this.state.url,
            formdata
        )
            .then((res) => {
                console.log("response of login=", res);
                this.state.checked ? this.props.setUserName(this.state.userName) : null
                this.props.navigation.replace('HomeScreen')
            })
            .catch((err) => {
                console.log("error in login=", err);
                Alert.alert('Error in auth', err)
            })
    }

    renderCheckBox = () => {
        return (
            <View style={style.checkBoxContainer}>
                <TouchableOpacity onPress={() => this.setState({ checked: !this.state.checked })}>
                    <View style={[this.state.checked ? { backgroundColor: 'black' } : null, style.checkBoxStyle]}>
                        <Text style={style.checkBoxTickStyle}>{this.state.checked ? '✓' : null}</Text>
                    </View>
                </TouchableOpacity>
                <Text style={style.rememberMeTextStyle}>{'Remember Me'}</Text>
            </View>
        )
    }

    makeCheck = () => {
        return this.state.passWord.length > 0 && this.state.userName.length > 0 ? true : false
    }

    render() {
        return (
            <>
                <View style={style.topNavStyle}>
                    <Text style={style.topNavTextStyle}>{'Salesforce Login'}</Text>
                </View>
                <View style={style.containerStyle}>
                    <View style={{alignItems:'center'}}>
                        <Image
                            source={require('../../assets/salesforce.png')}
                            style={{height: 100, width: 100}}
                        />
                    </View>
                    <View style={{paddingVertical: 8}}>
                        <Text style={style.userNameTextStyle}>{'Username'}</Text>
                        <TextInput
                            placeholder='Enter Username'
                            onChangeText={(text) => this.setState({ userName: text })}
                            value={this.state.userName}
                            placeholderTextColor={'grey'}
                            style={style.textInputStyle}
                        />
                    </View>
                    <View style={{paddingVertical: 8}}> 
                        <Text style={style.passwordTextStyle}>{'Password'}</Text>
                        <TextInput
                            placeholder='Enter Password'
                            onChangeText={(pass) => this.setState({ passWord: pass })}
                            placeholderTextColor={'grey'}
                            value={this.state.passWord}
                            secureTextEntry
                            style={style.textInputStyle} />
                    </View>
                    <View style={style.buttonContainerStyle}>
                        <TouchableOpacity
                            disabled={!this.makeCheck()}
                            style={!this.makeCheck() ? style.disabledButton : style.buttonStyle}
                            onPress={() => this.callApi()}
                        >
                            <View style={style.buttonTitleContainer}>
                                <Text style={style.buttonTextStyle}>{'Login'}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {this.renderCheckBox()}
                    {this.state.isLoading ? (<ActivityIndicator size="large" color="red" />) : (
                        null
                    )}
                </View>
            </>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    getUserName: state.persistedReducer.userName
})

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        setUserName: (s: string) => {
            dispatch(setUsername(s));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);