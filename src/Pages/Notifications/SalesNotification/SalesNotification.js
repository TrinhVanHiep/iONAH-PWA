import React from 'react';
import NotiPanel from '../../../components/NotiPanel';
import giftsample from '../../../asset/img/Notification/giftsample.png';
import textImage from '../../../asset/img/Notification/textImage1.png';
import { useWindowSize } from '@magento/peregrine';
import NotiPanelMobile from '../../../components/NotiPanelMobile/notiPanelMobile';
function SalesNotification() {
    const windowSize = useWindowSize();
    const listContent = [
        {
            date: '30/11/2021',
            image: giftsample,
            title: 'Máy giặt cửa trước 12.5KG (WF-125I140BGB)',
            content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            contentImage: textImage
        },
        {
            date: '30/11/2021',
            image: giftsample,
            title: 'Máy giặt cửa trước 12.5KG (WF-125I140BGB)',
            content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            contentImage: textImage
        },
        {
            date: '30/11/2021',
            image: giftsample,
            title: 'Máy giặt cửa trước 12.5KG (WF-125I140BGB)',
            content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            contentImage: textImage
        },
        {
            date: '30/11/2021',
            image: giftsample,
            title: 'Máy giặt cửa trước 12.5KG (WF-125I140BGB)',
            content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            contentImage: textImage
        }
    ];
    return windowSize.innerWidth > 800 ? (
        <NotiPanel listContent={listContent} />
    ) : (
        <NotiPanelMobile listContent={listContent} />
    );
}

export default SalesNotification;
