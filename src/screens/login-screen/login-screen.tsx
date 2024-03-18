import { Component } from "react";
import { AppDispatch, RootState } from "../../redux/store";
import { connect } from "react-redux";
import { setName } from "../../redux/reducers/user-reducer";
import { TouchableOpacity, View, Text } from "react-native";

interface LoginScreenProps {
    setName: (name: string) => void;
    getName: string;
}

interface LoginScreenStates {
}

class LoginScreen extends Component<LoginScreenProps, LoginScreenStates> {
    constructor(props: LoginScreenProps) {
        super(props);
        this.state = {
        }
    }

    onPressButton = () => {
        this.props.setName("abc")
    }

    render() {
        console.log("state from redux=", this.props.getName);
        
        return (
            <View style={{flex:1}}>
                <TouchableOpacity onPress={()=> this.onPressButton()}>
                    <Text style={{fontSize: 20, fontWeight:'bold'}}>{'Press Me'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    getName: state.userName
})

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        setName: (s: string) => {
            dispatch(setName(s));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);