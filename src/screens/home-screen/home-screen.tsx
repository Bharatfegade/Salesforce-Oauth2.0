import { Component } from "react";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import SalesforceManager from "../../api-manager/salesforce-manager/salesforce-manager";
import { style } from "./style";

interface HomeScreenProps {
    navigation: any;
}

interface HomeScreenStates {
    assetData: any;
    accountData: any;
}

class HomeScreen extends Component<HomeScreenProps, HomeScreenStates> {
    constructor(props: HomeScreenProps) {
        super(props);
        this.state = {
            assetData: {},
            accountData: {}
        }
    }

    componentDidMount() {
        this.callAccountApi()
        this.callAssetApi()
    }

    handleLogout = async () => {
        try {
            Alert.alert('Logout', 'Are you sure you want to logout ?', [
                {
                    text: 'Ok',
                    onPress: () => {
                        this.onLogout()
                    }
                },
                {
                    text: 'Cancel',
                    onPress: () => { }
                }
            ])
        } catch (e) {
            Alert.alert(e)
        }
    }

    onLogout = () => {
        this.props.navigation.replace('LoginScreen')
    }

    callAccountApi = () => {
        SalesforceManager.getAccountDetails()
            .then((res: any) => {
                console.log("response of account=", res.data);
                this.setState({ accountData: res.data })
            })
            .catch((err) => {
                console.log("error in account=", err);
            })
    }

    callAssetApi = () => {
        SalesforceManager.getFetchData('select name, id from asset')
            .then((res: any) => {
                console.log("response of asset=", res.data.records[0]);
                this.setState({ assetData: res.data.records[0] })
            })
            .catch((err) => {
                console.log("error in asset=", err);
            })
    }

    render() {
        console.log("On the homescreen=", this.state.accountData);

        return (
            <>
                <View style={style.topNavStyle}>
                    <Text style={style.topNavTextStyle}>{'Salesforce Login'}</Text>
                </View>
                <View style={style.textContainer}>
                    {this.state.accountData.email ? (
                        <>
                            <Text style={style.headingTextStyle}>{'Account Details'}</Text>
                            <Text style={style.subTextStyle}>
                                {"Name: " + this.state.accountData.display_name + '\n'}
                                {"Email: " + this.state.accountData.email + '\n'}
                                {"User ID: " + this.state.accountData.nick_name + '\n'}
                                {"Organization ID: " + this.state.accountData.organization_id + '\n'}
                            </Text>
                        </>
                    ) : null}
                    {this.state.assetData.Id ? (
                        <>
                            <Text style={style.headingTextStyle}>{'Asset Details'}</Text>
                            <Text style={style.subTextStyle}>
                                {"Asset ID: " + this.state.assetData.Id + '\n'}
                                {"Asset Name: " + this.state.assetData.Name + '\n'}
                            </Text>
                        </>
                    ) : null}
                    <View style={style.buttonContainerStyle}>
                        <TouchableOpacity
                            style={style.buttonStyle}
                            onPress={() => this.handleLogout()}
                        >
                            <View style={style.buttonTitleContainer}>
                                <Text style={style.buttonTextStyle}>{'Logout'}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    getAccountData: state.userReducer.authData
})

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);