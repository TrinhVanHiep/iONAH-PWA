import { useStyle } from '@magento/venia-ui/lib/classify';
import React from 'react';
import sampleImage from '../../asset/img/Notification/sample1.png';
import { currentPath, menuList } from '../../Pages/Notifications/helper';
import TabBar from '../../Pages/Notifications/TabBar';
// import { currentPath, menuList } from '../helper';
// import TabBar from '../TabBar';
import defaultClasses from './NotificationPanel.module.css';
function NotiPanel({ listContent }) {
    const classes = useStyle(defaultClasses);
    return (
        <div className={classes.generalNotificationContainer}>
            <TabBar item={menuList} currentPath={currentPath} />
            <div className={classes.generalNotificationContent}>
                <div className={classes.btnGroupOutLine}>
                    <a className={classes.readedBtn}>Đã đọc tất cả</a>
                    <a className={classes.deleteBtn}>Xóa tất cả</a>
                </div>
                <div className={classes.notiContent}>
                    {listContent.map(item => (
                        <div className={classes.contentWrapper}>
                            <div
                                className={
                                    item.contentImage
                                        ? `${classes.contentDate} ${
                                              classes.test
                                          }`
                                        : classes.contentDate
                                }
                            >
                                {item.date}
                            </div>
                            <div className={classes.contentImage}>
                                <img src={item.image} />
                            </div>
                            <div className={classes.contentTextWrapper}>
                                <div className={classes.contentTextTitle}>
                                    {item.title}
                                </div>
                                <div className={classes.contentTextContent}>
                                    {item.content}
                                </div>
                                {item.contentImage ? (
                                    <div className={classes.contentTextImage}>
                                        <img src={item.contentImage} />
                                    </div>
                                ) : null}
                            </div>
                            <div
                                className={
                                    item.contentImage
                                        ? `${classes.btnGroupInLine} ${
                                              classes.test
                                          }`
                                        : classes.btnGroupInLine
                                }
                            >
                                <a className={classes.readedBtn}>
                                    Đánh dấu đã đọc
                                </a>
                                <a className={classes.deleteBtn}>Xóa</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NotiPanel;
