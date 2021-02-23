import React from 'react';
import { Alert } from 'antd';

const NotFoundPage = () => {

    return (
        <Alert
            message="Ошибка 404"
            description="Страница не найдена!"
            type="error"
            showIcon
        />
    );
};

export default NotFoundPage;