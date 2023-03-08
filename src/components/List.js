import React from 'react';

class Listar extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (<table class="table">
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row"></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td scope="row"></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>);
    }
}

export default Listar;