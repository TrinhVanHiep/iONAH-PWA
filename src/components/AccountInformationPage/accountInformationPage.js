import React, { Fragment } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useAccountInformationPage } from '@magento/peregrine/lib/talons/AccountInformationPage/useAccountInformationPage';
import { useStyle } from '@magento/venia-ui/lib/classify';
import Button from '../Button/button';
import { Message } from '@magento/venia-ui/lib/components/Field';
import defaultClasses from './accountInformationPage.module.css';
import AccountInformationPageOperations from './accountInformationPage.gql.js';
import avatar from "../../asset/img/AccountInformation/avatar.png";

const AccountInformationPage = props => {
  const classes = useStyle(defaultClasses, props.classes);

  const talonProps = useAccountInformationPage({
    ...AccountInformationPageOperations
  });

  const {
    handleCancel,
    formErrors,
    handleChangePassword,
    handleSubmit,
    initialValues,
    isDisabled,
    isUpdateMode,
    loadDataError, fullPageLoadingIndicator
    // shouldShowNewPassword,
    // showUpdateMode,
    // recaptchaWidgetProps
  } = talonProps;
  const { formatMessage } = useIntl();

  const errorMessage = loadDataError ? (
    <Message>
      <FormattedMessage
        id={'accountInformationPage.errorTryAgain'}
        defaultMessage={
          'Something went wrong. Please refresh and try again.'
        }
      />
    </Message>
  ) : null;

  const initialName = {
    firstName: "doan",
    lastName: "diego",
    email: "doan99@.net"
  }

  const customer = initialName

  const customerName = customer.firstName + customer.lastName
  const passwordValue = "*************"

  let pageContent = (
    <Fragment>
      <div className={classes.userInformation}>
        <div className={classes.userAvatar}>
          <img src={avatar} />
          <p className={classes.selectImage}>Anh dai dien</p>
          <Button className={classes.btnSelectImage} type='secondary'>Them Anh</Button>
        </div>

        <div className={classes.accountDetails}>
          <h3 className={classes.title}>Thông tin cá nhân</h3>
          <div className={classes.lineItemsContainer}>
            <span className={classes.nameLabel}>
              <FormattedMessage
                id={'global.name'}
                defaultMessage={'Tên'}
              />
            </span>
            <span className={classes.nameValue}>
              {customerName}
            </span>
            <span className={classes.emailLabel}>
              <FormattedMessage
                id={'global.email'}
                defaultMessage={'Giới tính'}
              />
            </span>
            <span className={classes.emailValue}>
              {customer.email}
            </span>
            <span className={classes.passwordLabel}>
              <FormattedMessage
                id={'global.password'}
                defaultMessage={'Password'}
              />
            </span>
            <span className={classes.passwordValue}>
              {passwordValue}
            </span>
          </div>
          <div className={classes.editButtonContainer}>
            <Button
              className={classes.editInformationButton}
              disabled={false}
              priority="normal"
              data-cy="AccountInformationPage-editInformationButton"
            >
              <FormattedMessage
                id={'global.editButton'}
                defaultMessage={'Edit'}
              />
            </Button>
          </div>
        </div>
      </div>

    </Fragment>
  );

  return (
    <div className={classes.root} >
      <h1
        aria-live="polite"
        className={classes.title}
        data-cy="Thông tin tài khoản"
      >
        Thông tin tài khoản
      </h1>
      <div classes={classes.content} >{pageContent}</div>
    </div>
  );
};

export default AccountInformationPage;
