import { ProposalCriteria } from './../models/proposal-criteria.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as _ from "lodash";

import { Proposal } from '../../shared/models/proposal.model';
import { PROPOSALS } from '../../proposal/shared/proposals-mock';

@Injectable()
export class ProposalService {

    proposalList: Proposal[];

    constructor(){
        this.proposalList = PROPOSALS;
    }

    getProposals(criteria: ProposalCriteria): Promise<Array<Proposal>> {
        return Promise.resolve(this.proposalList);
    }

    getProposalById(id: number): Promise<Proposal> {

        let proposal = null;
        for (let prop of this.proposalList) {
            console.log(JSON.stringify(prop)); 
            if (prop.id == id) {
                    proposal = _.cloneDeep(prop);
            }
        }

        return Promise.resolve(proposal);
    }

    updateProposal(proposal: Proposal): Promise<Proposal> {
        
        let index = -1;
        for (let prop of this.proposalList) { 
            if (prop.id === proposal.id) {
                    index = this.proposalList.indexOf(prop);
                }
        }
        this.proposalList.splice(index, 1, proposal);

        return Promise.resolve(proposal);
    }

    insertProposal(proposal: Proposal): Promise<Proposal> {
        return null;
    }

    deleteProposal(proposal: Proposal): Promise<Proposal> {

        for (let prop of this.proposalList) { 
            console.log('check',prop,prop.id === proposal.id);
            if (prop.id === proposal.id) {
                    prop.companyProfile = 'N.A.';
                    prop.nationalWorkProfile = 'N.A.';
                    prop.moneyProposal = 'N.A.';
                    prop.motivation = '';
                }
        }
        console.log('new List',this.proposalList);

        return Promise.resolve(proposal);

        // let index = -1;
        // let promposalDeleted = null;
        // for (let prop of this.proposalList) { 
        //     if (prop.id === proposal.id) {
        //             index = this.proposalList.indexOf(prop);
        //             promposalDeleted = _.cloneDeep(prop);
        //             promposalDeleted.companyProfile = 'N.A.';
        //             promposalDeleted.nationalWorkProfile = 'N.A.';
        //             promposalDeleted.moneyProposal = 'N.A.';
        //             promposalDeleted.motivation = '';
        //         }
        // }
        // this.proposalList.splice(index, 1, promposalDeleted);

        // return Promise.resolve(proposal);
    }

}