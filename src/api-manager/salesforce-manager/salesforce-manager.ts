import { HttpMethod } from "../../constants/method-enums/method-enum";
import axios from "axios";
import EndPoints from "../../constants/end-points/end-points";
import { Alert } from "react-native";
import { connect } from 'react-redux';
import { setAuthData } from "../../redux/reducers/user-reducer";
import { Component } from "react";
import store, { AppDispatch, RootState } from "../../redux/store";
import { DomainUrl } from "../../constants/domain-urls/domain-url";

interface SalesforceManagerProps {
    navigation: any
}

interface SalesforceManagerStates {
}

class SalesforceManager extends Component<SalesforceManagerProps, SalesforceManagerStates> {
    constructor(props: SalesforceManagerProps) {
        super(props);
        this.state = {
        }
    }

    public static Login = (url: string, payload = {}) => {
        return new Promise((resolve, reject) => {
            axios({
                method: HttpMethod.POST,
                url: url + EndPoints.auth_endpoint,
                headers: this.formDataHeader(),
                data: payload,
            })
                .then((response) => {
                    store.dispatch(setAuthData(response.data))
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                });
        })
    }

    public static getAuthHeader = () => {
        let token = store.getState().userReducer.authData.access_token
        return token ? { Authorization: `Bearer ${token}` } : null
    }

    public static formDataHeader = () => {
        return { 'Content-Type': 'multipart/form-data' }
    }

    public static getAccountDetails = () => {
        let accountUrl = store.getState().userReducer.authData.id
        console.log("accounturl=", accountUrl);
        return new Promise((resolve, reject) => {
            axios({
                method: HttpMethod.GET,
                url: accountUrl,
                headers: this.getAuthHeader()
            })
                .then((response) => {
                    console.log("response of account=", response);
                    resolve(response)
                })
                .catch((error) => {
                    console.log("error of getuserdetails=", error);
                    reject(error)
                })
        })
    }

    public static getFetchData = (query: string) => {
        return new Promise((resolve, reject) => {
            axios({
                method: HttpMethod.GET,
                url: DomainUrl.mydomain + EndPoints.query_endpoint + query,
                headers: this.getAuthHeader()
            })
                .then((response) => {
                    console.log("response of fetchdata=", response);
                    resolve(response)
                })
                .catch((error) => {
                    console.log("error of fetchdata=", error);
                    reject(error)
                })
        })
    }

    public static handleError = () => {
        Alert.alert('Session Expired')
        this.props.navigation.replace('LoginScreen')
    }
}

const mapStateToProps = (state: RootState) => ({
})

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        setAccountData: (data: any) => {
            dispatch(setAuthData(data));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SalesforceManager);