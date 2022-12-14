import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { func, shape, string } from 'prop-types';
import { Form } from 'informed';
import { useSignIn } from '@magento/peregrine/lib/talons/SignIn/useSignIn';

import { useStyle } from '@magento/venia-ui/lib/classify';
import { isRequired } from '@magento/venia-ui/lib/util/formValidators';
import Field from '@magento/venia-ui/lib/components/Field';
import TextInput from '@magento/venia-ui/lib/components/TextInput';
import defaultClasses from './signIn.module.css';
import { GET_CART_DETAILS_QUERY } from './signIn.gql';
import LinkButton from '@magento/venia-ui/lib/components/LinkButton';
import Password from '@magento/venia-ui/lib/components/Password';
import FormError from '@magento/venia-ui/lib/components/FormError/formError';
import GoogleRecaptcha from '@magento/venia-ui/lib/components/GoogleReCaptcha';
import Input from '../Input';
import Button from '../Button/button';
import { IconCheckedTerm } from '../../asset/Icons/Icon';
import IconFB from './../../asset/img/SignIn/iconFB.png'
import IconGG from './../../asset/img/SignIn/iconGG.png'
import IconZalo from './../../asset/img/SignIn/iconZalo.png'

const SignIn = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const {
        setDefaultUsername,
        showCreateAccount,
        showForgotPassword,
        initialValues
    } = props;

    const { formatMessage } = useIntl();
    const talonProps = useSignIn({
        getCartDetailsQuery: GET_CART_DETAILS_QUERY,
        setDefaultUsername,
        showCreateAccount,
        showForgotPassword
    });

    const {
        errors,
        handleCreateAccount,
        handleForgotPassword,
        handleSubmit,
        isBusy,
        setFormApi,
        recaptchaWidgetProps
    } = talonProps;

    const forgotPasswordClasses = {
        root: classes.forgotPasswordButton
    };

    return (
        <div data-cy="SignIn-root" className={classes.root}>
            {/* <span data-cy="SignIn-title" className={classes.title}>
                <FormattedMessage
                    id={'signIn.titleText'}
                    defaultMessage={'Sign-in to Your Account'}
                />
            </span>
            <span className={classes.title_span}>????ng nh???p l?? ????ng k??</span> */}
            <div className={classes.modal_header} >
                <p>????ng nh???p/ ????ng k??</p>
                <span>????ng nh???p l?? ????ng k??</span>
            </div>
            <FormError errors={Array.from(errors.values())} />
            <Form
                getApi={setFormApi}
                className={classes.form}
                onSubmit={handleSubmit}
                data-cy="SignIn-form"
                initialValues={initialValues && initialValues}
            >
                <Input placeholder="S??? ??i???n tho???i *" />
                <Button  className={classes.btnGetOtp}>Nh???n m?? OTP</Button>
                <Input placeholder="Nh???p m?? OTP" className={classes.inputTypeOtp} />
                <Button className={classes.btnLogin} >????ng nh???p</Button>
                <div className={classes.termInfo}>
                <IconCheckedTerm/>
                <span className={classes.term}>T??i ?????ng ?? v???i ??i???u kho???n d???ch v??? v?? ch??nh s??ch b???o m???t c???a Ionah</span>
                </div>
                <h2 className={classes.or}><span className={classes.orSpan}>Ho???c</span></h2>
                <div className={classes.modalFooter} >
                    <img src={IconFB} className={classes.iconFB} alt="" />
                    <img src={IconGG} className={classes.iconGG}  alt="" />
                    <img src={IconZalo} className={classes.iconZalo}  alt="" />
                </div>
            </Form>
        </div>
    );
};

export default SignIn;
SignIn.propTypes = {
    classes: shape({
        buttonsContainer: string,
        form: string,
        forgotPasswordButton: string,
        forgotPasswordButtonContainer: string,
        root: string,
        title: string
    }),
    setDefaultUsername: func,
    showCreateAccount: func,
    showForgotPassword: func,
    initialValues: shape({
        email: string.isRequired
    })
};
SignIn.defaultProps = {
    setDefaultUsername: () => { },
    showCreateAccount: () => { },
    showForgotPassword: () => { }
};
