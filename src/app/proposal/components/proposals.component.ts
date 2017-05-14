import { ProposalListComponent } from './../proposal-list/proposal-list.component';
import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

import { Proposal } from '../../shared/models/proposal.model';
import { Alert } from '../../shared/alert/shared/alert.model';

@Component({
  moduleId: module.id,
  selector: 'esl-proposals',
  templateUrl: 'proposals.component.html',
  styleUrls: ['proposals.component.css']
})

export class ProposalsComponent implements OnInit {

    editProposal: Proposal;
    proposalEditId: number;
    public alerts: Array<Alert> = [];
     @ViewChild('proposalList') proposalList: ProposalListComponent;

    ngOnInit(): void {
      console.log("ngOninit proposal");
      this.editProposal = null;
      this.alerts = [];
      // test
      this.onError("Test error!");
    }

    constructor(private router: Router) {}

    /**
     * Opens Edit Modal
     * 
     * @param Proposal proposal to be edited
     */
    onEditClick(proposal: Proposal) {
      //this.editProposal = proposal;
      console.log("this.proposalEditId = " + proposal.id);
      this.proposalEditId = proposal.id;
      $('#myModal').modal('show');
      //this.router.navigate(['/proposal-edit', proposal.id]);
    }

    /**
     * Handles errors from server.
     * 
     * @param string errorMessage to display to user
     */
    onError(errorMessage: string) {
         this.alerts.push(new Alert(Alert.TYPE_DANGER, errorMessage));
     }

     onEditedProposalSubmitted(proposalUpdated:Proposal){
       if(proposalUpdated){ //if itsn't undefineed
          this.proposalList.reload();
       }
        $('#myModal').modal('hide');
        this.proposalEditId=undefined;
     }
}