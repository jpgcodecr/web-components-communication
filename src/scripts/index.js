import '../styles/index.scss';

import { LitElement, html, css } from 'lit';

/**
 * Form Address component
 * Communicates with API and helps user to define a given address
 */
export class ContractForm extends LitElement {

    static styles = css`
        .wrapper {
            max-width: 500px;
            margin: 0 auto;
        }
        textarea {
            width: 300px;
            padding: 30px 10px;
            border-radius: 8px;
            border: 1px solid #CCC;
        }
    `;

    // Define data property: used to store data from the API
    static get properties() {
        return {
            contractType: { type: String }
        };
    }

    /**
     * @method  onKeyUp - Updates the global data model on user interaction
     * @param {*} e 
     */
    onKeyUp(e) {
        dataModel.contract.contractModules[this.contractType].comments = e.target.value;
        updateDebugger();
    }

    render() {
        return html`
            <div class="wrapper">
                <h2>Type of contract: ${this.contractType}</h2>
                <div><label>Comments:</label></div>
                <textarea @keyup=${this.onKeyUp}>${dataModel.contract.contractModules[this.contractType].comments}</textarea>
            </div>    
        `;
    }
}

customElements.define('contract-form', ContractForm);
