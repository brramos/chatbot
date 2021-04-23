import { Card, Col, Input, Row } from 'antd';
import * as React from 'react';
import styled from 'styled-components';
import { AidaPipeline } from '../../src/pipelines/zebraWings/pipeline';

interface IPipelineTestInputProps {
    pipeline: AidaPipeline;
}
interface IPipelineTestInputState {
    disabled: boolean;
    outTextContent: string | null;
}
// ant bug: patch input styling of search text input to avoid being hidden by the button
const SearchInput = styled(Input.Search)`
    > input {
        padding-right: 70px !important;
    }
`;
export default class TrainedPipelineTestInput extends React.Component<IPipelineTestInputProps, IPipelineTestInputState> {
    public state: IPipelineTestInputState = {
        disabled: false,
        outTextContent: null
    };

    public render() {
        return (
            <div>
                <Row type="flex" justify="center">
                    <Col span={24} sm={{ span: 12 }}>
                        <Card title="Test trained pipeline:" style={{ minHeight: '100%' }}>
                            <p>
                                <SearchInput
                                    placeholder="Enter some input to process..."
                                    enterButton="Send"
                                    size="large"
                                    onSearch={this.handleSubmit}
                                    id="__inputSearch"
                                    disabled={this.state.disabled}
                                />
                            </p>
                            {this.props.children || null}
                        </Card>
                    </Col>
                    <Col span={24} sm={{ span: 12 }}>
                        <Card title="Pipeline output:" style={{ minHeight: '100%' }}>
                            <pre style={{ marginTop: '2em' }}>{this.state.outTextContent || ''}</pre>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }

    private predict = (sentences: string) => {
        const predictions = this.props.pipeline.predict([sentences]);
        return Object.assign({}, predictions.classification[0], predictions.ner[0]);
    };

    private handleSubmit = (value: string) => {
        if (!value || !value.trim()) {
            return null;
        }
        this.setState({ disabled: true }, () => {
            const outTextContent = JSON.stringify(this.predict(value), null, 2);
            this.setState({ outTextContent }, () => {
                this.setState({ disabled: false });
                const inputSearch = document.getElementById('__inputSearch') as HTMLInputElement;
                if (inputSearch && inputSearch.value) {
                    inputSearch.value = '';
                }
            });
        });
    };
}
