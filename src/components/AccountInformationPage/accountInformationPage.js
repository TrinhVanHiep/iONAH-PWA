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
          <p className={classes.selectImage}>Ảnh đại diện</p>
          <Button className={classes.btnSelectImage} type='secondary'>Chọn ảnh</Button>
        </div>

        <div className={classes.accountDetails}>
          <div className={classes.personalInfor}>
            <h3 className={classes.title}>Thông tin cá nhân</h3>
            <div className={classes.content}>
              <div className={classes.contentLabel}>
                <span className={classes.labelName}>Tên</span>
              </div>
              <div className={classes.contentValue}>
                <Input className={classes.textInput} onChange={() => { }} placeholder='Enter your name' />
              </div>
            </div>

            <div className={classes.content}>
              <div className={classes.contentLabel}>
                <span className={classes.labelName}>Giới tính</span>
              </div>
              <div className={classes.contentValue}>

              </div>
            </div>

            <div className={classes.content}>
              <div className={classes.contentLabel}>
                <span className={classes.labelName}>Ngày sinh</span>
              </div>
              <div className={classes.contentValue}>
                <Dropdown className={classes.dropdownSelect} label="Ngày" value={dayValue} height="32px" width="143px" backgourd="#F7F7F7" />
                <Dropdown className={classes.dropdownSelect} label="Tháng" value={dayValue} height="32px" width="143px" backgourd="#F7F7F7" />
                <Dropdown className={classes.dropdownSelect} label="Năm" value={dayValue} height="32px" width="143px" backgourd="#F7F7F7" />
              </div>
            </div>
          </div>

          <div className={classes.personalInfor}>
            <h3 className={classes.title}>Số điện thoại và email</h3>
            <div className={classes.content}>
              <div className={classes.contentLabel}>
                <span className={classes.labelName}>Số điện thoại</span>
              </div>
              {/* <div className={classes.contentValue}>
                <p className={classes.userPhoneNumber}>(+84) 000 000 0000</p>
              </div> */}
              <div className={classes.contentValueEdit}>
                <div className={classes.valueEdit}>(+84) 000 000 0000</div>
                <p className={classes.editButton}>Thay đổi</p>
              </div>
            </div>

            <div className={classes.content}>
              <div className={classes.contentLabel}>
                <span className={classes.labelName}>Email</span>
              </div>
              <div className={classes.contentValueEdit}>
                <div className={classes.valueEdit}>(+84) 000 000 0000</div>
                <p className={classes.editButton}>Thay đổi</p>
              </div>
            </div>
          </div>

          <div className={classes.personalInfor}>
            <h3 className={classes.title}>Liên kết tài khoản mạng xã hội</h3>
            <div className={classes.contentSocial}>
              <div className={classes.contentLabel}>
                <span className={classes.labelName}>
                  <i className={classes.socialIcon}><IconFacebookColor /></i> Facebook
                </span>
              </div>
              <div className={classes.contentValueSocial}>
                <Button className={classes.buttonLink}>Liên kết</Button>
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
                  <button className={classes.buttonLink}>Đã liên kết</button>
                  <p className={classes.cancelLink}>Hủy liên kết</p>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.buttonSubmit}>
            <Button type='primary' className={classes.buttonSave}>Lưu thay đổi</Button>
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
        data-cy="Thông tin tài khoản"
      >
        Thông tin tài khoản
      </h1>
      <div classes={classes.content} >{pageContent}</div>
    </div>
  );
};

export default AccountInformationPage;
