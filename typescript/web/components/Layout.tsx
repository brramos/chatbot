import '@babel/polyfill';
import { Icon, Layout, Menu } from 'antd';
import Link from 'gatsby-link';
import * as React from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';

const { Content, Footer } = Layout;

const demoRouteRE = /^\/demo(\/.*)?$/i;


export const InnerContent = styled(Content)`
    > p {
        text-align: justify;
    }
    background: #fcfcfc;
    min-height: '95vh';
`;

export const InnerPaddedContent = styled(InnerContent)`
    padding: 28px 28px 28px 52px;
`;

export default class MainLayout extends React.Component<{ location: { pathname: string }; addPadding?: boolean }, {}> {
    public render() {
        let defaultSelectedKeys = '-1';
        if (demoRouteRE.test(this.props.location.pathname)) {
            defaultSelectedKeys = '2';
        }
        const IC = this.props.addPadding ? InnerPaddedContent : InnerContent;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Layout style={{ flexDirection: 'row' }}>
                    <Layout style={{ padding: '24px 0 0 24px' }}>
                        <IC>{this.props.children}</IC>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
