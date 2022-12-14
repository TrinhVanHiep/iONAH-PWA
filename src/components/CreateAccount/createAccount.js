import { useCreateAccount } from '@magento/peregrine/lib/talons/CreateAccount/useCreateAccount';
import { Form } from 'informed';
import { bool, func, shape, string } from 'prop-types';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { useStyle } from '@magento/venia-ui/lib/classify';
import Button from '../Button';
import Input from '../Input';
import IconFB from './../../asset/img/SignIn/iconFB.png';
import IconGG from './../../asset/img/SignIn/iconGG.png';
import IconZalo from './../../asset/img/SignIn/iconZalo.png';
import defaultClasses from './createAccount.module.css';

const CreateAccount = props => {
    const talonProps = useCreateAccount({
        initialValues: props.initialValues,
        onSubmit: props.onSubmit,
        onCancel: props.onCancel
    });

    const {
        errors,
        handleCancel,
        handleSubmit,
        isDisabled,
        initialValues,
        recaptchaWidgetProps
    } = talonProps;
    const { formatMessage } = useIntl();
    const classes = useStyle(defaultClasses, props.classes);

    const cancelButton = props.isCancelButtonHidden ? null : (
        <Button
            data-cy="CreateAccount-cancelButton"
            className={classes.cancelButton}
            disabled={isDisabled}
            type="button"
            priority="low"
            onClick={handleCancel}
        >
            <FormattedMessage
                id={'createAccount.cancelText'}
                defaultMessage={'Cancel'}
            />
        </Button>
    );

    const submitButton = (
        <Button
            className={classes.submitButton}
            disabled={isDisabled}
            type="submit"
            priority="high"
            data-cy="CreateAccount-submitButton"
        >
            <FormattedMessage
                id={'createAccount.createAccountText'}
                defaultMessage={'Create an Account'}
            />
        </Button>
    );

    return (
        <Form
            data-cy="CreateAccount-form"
            className={`${classes.root} ${classes.wapper}`}
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            <h2 data-cy="CreateAccount-title" className={classes.title}>
                ????ng nh???p/ ????ng k??
            </h2>
            <Input className={classes.signUpInput} placeholder="H??? t??n" />
            <Input className={classes.signUpInput} placeholder="S??? ??i???n tho???i" />
            <Input className={classes.signUpInput} placeholder="Email" />
            <Input className={classes.signUpInput} placeholder="Password" />
            <Button className={classes.btnLogin}>????ng k??</Button>
            <h2 className={classes.or}><span className={classes.orSpan}>Ho???c</span></h2>
            <div className={classes.modalFooter} >
                <img src={IconFB} className={classes.iconFB} alt="" />
                <img src={IconGG} className={classes.iconGG} alt="" />
                <img src={IconZalo} className={classes.iconZalo} alt="" />
            </div>
            <div className="term-info">
                <span className={classes.term}>B???ng vi???c ????ng k??, b???n ???? ?????ng ?? v???i iONAH v??? <a href=""> ??i???u kho???n d???ch v???</a> &  <a href="">Ch??nh s??ch b???o m???t</a> </span>
            </div>
            <p className={classes.registerLink}>???? c?? t??i kho???n? ????ng nh???p <a href="">t???i ????y</a></p>
        </Form>
    );
};

CreateAccount.propTypes = {
    classes: shape({
        actions: string,
        lead: string,
        root: string,
        subscribe: string
    }),
    initialValues: shape({
        email: string,
        firstName: string,
        lastName: string
    }),
    isCancelButtonHidden: bool,
    onSubmit: func,
    onCancel: func
};

CreateAccount.defaultProps = {
    onCancel: () => { },
    isCancelButtonHidden: true
};

export default CreateAccount;
