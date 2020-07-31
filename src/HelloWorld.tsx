import React from 'react';

interface HelloWorldProps {
    name: string;
}

export class HelloWorld extends React.Component<HelloWorldProps> {
    render() {
        return (
            <div>
                <h2>Hello World!</h2>
                <h3>And hello {this.props.name}</h3>
            </div>
        );
    }
}