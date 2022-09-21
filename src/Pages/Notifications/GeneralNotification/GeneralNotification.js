import React from 'react';
import sampleImage from '../../../asset/img/Notification/sample1.png';
import textImage from '../../../asset/img/Notification/textImage1.png';
import NotiPanel from '../../../components/NotiPanel';
import { useWindowSize } from '@magento/peregrine';
import NotiPanelMobile from '../../../components/NotiPanelMobile/notiPanelMobile';
function GeneralNotification() {
    const windowSize = useWindowSize();
    const listContent = [
        {
            date: '30/11/2021',
            image: sampleImage,
            title: 'Máy giặt cửa trước 12.5KG (WF-125I140BGB)',
            content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            date: '30/11/2021',
            image: sampleImage,
            title: 'Máy giặt cửa trước 12.5KG (WF-125I140BGB)',
            content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            date: '30/11/2021',
            image: sampleImage,
            title: 'Máy giặt cửa trước 12.5KG (WF-125I140BGB)',
            content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            contentImage: textImage
        },
        {
            date: '30/11/2021',
            image: sampleImage,
            title: 'Máy giặt cửa trước 12.5KG (WF-125I140BGB)',
            content:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        }
    ];
    return windowSize.innerWidth > 800 ? (
        <NotiPanel listContent={listContent} />
    ) : (
        <NotiPanelMobile listContent={listContent} />
    );
}

export default GeneralNotification;
