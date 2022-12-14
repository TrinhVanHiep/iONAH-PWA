import React, { Fragment, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useAccountInformationPage } from '@magento/peregrine/lib/talons/AccountInformationPage/useAccountInformationPage';
import { useStyle } from '@magento/venia-ui/lib/classify';
import Button from '../Button/button';
import { Message } from '@magento/venia-ui/lib/components/Field';
import defaultClasses from './accountInformationPage.module.css';
import AccountInformationPageOperations from './accountInformationPage.gql.js';
import avatar from "../../asset/img/AccountInformation/avatar.png";
import Input from "../Input";
import Dropdown from "../Dropdown/index";
import { IconFacebookColor } from '../../asset/Icons/Icon';
import googleIcon from "../../asset/img/AccountInformation/googleIcon.svg"

const AccountInformationPage = props => {
  const classes = useStyle(defaultClasses, props.classes);
  const [dayValue, setDayValue] = useState()

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
          <p className={classes.selectImage}>???nh ?????i di???n</p>
          <Button className={classes.btnSelectImage} type='secondary'>Ch???n ???nh</Button>
        </div>

        <div className={classes.accountDetails}>
          <div className={classes.personalInfor}>
            <h3 className={classes.title}>Th??ng tin c?? nh??n</h3>
            <div className={classes.content}>
              <div className={classes.contentLabel}>
                <span className={classes.labelName}>T??n</span>
              </div>
              <div className={classes.contentValue}>
                <Input className={classes.textInput} onChange={() => { }} placeholder='Enter your name' />
              </div>
            </div>

            <div className={classes.content}>
              <div className={classes.contentLabel}>
                <span className={classes.labelName}>Gi???i t??nh</span>
              </div>
              <div className={classes.contentValue}>

              </div>
            </div>

            <div className={classes.content}>
              <div className={classes.contentLabel}>
                <span className={classes.labelName}>Ng??y sinh</span>
              </div>
              <div className={classes.contentValue}>
                <Dropdown className={classes.dropdownSelect} label="Ng??y" value={dayValue} height="32px" width="143px" backgourd="#F7F7F7" />
                <Dropdown className={classes.dropdownSelect} label="Th??ng" value={dayValue} height="32px" width="143px" backgourd="#F7F7F7" />
                <Dropdown className={classes.dropdownSelect} label="N??m" value={dayValue} height="32px" width="143px" backgourd="#F7F7F7" />
              </div>
            </div>
          </div>

          <div className={classes.personalInfor}>
            <h3 className={classes.title}>S??? ??i???n tho???i v?? email</h3>
            <div className={classes.content}>
              <div className={classes.contentLabel}>
                <span className={classes.labelName}>S??? ??i???n tho???i</span>
              </div>
              {/* <div className={classes.contentValue}>
                <p className={classes.userPhoneNumber}>(+84) 000 000 0000</p>
              </div> */}
              <div className={classes.contentValueEdit}>
                <div className={classes.valueEdit}>(+84) 000 000 0000</div>
                <p className={classes.editButton}>Thay ?????i</p>
              </div>
            </div>

            <div className={classes.content}>
              <div className={classes.contentLabel}>
                <span className={classes.labelName}>Email</span>
              </div>
              <div className={classes.contentValueEdit}>
                <div className={classes.valueEdit}>(+84) 000 000 0000</div>
                <p className={classes.editButton}>Thay ?????i</p>
              </div>
            </div>
          </div>

          <div className={classes.personalInfor}>
            <h3 className={classes.title}>Li??n k???t t??i kho???n m???ng x?? h???i</h3>
            <div className={classes.contentSocial}>
              <div className={classes.contentLabel}>
                <span className={classes.labelName}>
                  <i className={classes.socialIcon}><IconFacebookColor /></i> Facebook
                </span>
              </div>
              <div className={classes.contentValueSocial}>
                <Button className={classes.buttonLink}>Li??n k???t</Button>
              </div>
            </div>

            <div className={classes.content}>
              <div className={classes.contentLabel}>
                <span className={classes.labelName}>
                  <i className={classes.socialIcon}>
                    <img src={googleIcon} alt="google-icon" /></i> Google
                </span>
              </div>
              <div className={classes.contentValueSocial}>
                <div className={classes.userPhoneNumber}>
                  <button className={classes.buttonLink}>???? li??n k???t</button>
                  <p className={classes.cancelLink}>H???y li??n k???t</p>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.buttonSubmit}>
            <Button type='primary' className={classes.buttonSave}>L??u thay ?????i</Button>
          </div>
        </div>
      </div>
    </Fragment >
  );

  return (
    <div className={classes.root} >
      <h1
        aria-live="polite"
        className={classes.title}
        data-cy="Th??ng tin t??i kho???n"
      >
        Th??ng tin t??i kho???n
      </h1>
      <div classes={classes.content} >{pageContent}</div>
    </div>
  );
};

export default AccountInformationPage;
