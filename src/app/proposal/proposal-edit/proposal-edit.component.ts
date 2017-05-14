import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from "lodash";

import { Proposal } from '../../shared/models/proposal.model';
import { ProposalService } from '../../shared/services/proposal.service';
import { MONEY_PROPOSAL, COMPANY_PROFILE, NATIONAL_WORK_PROFILE } from '../shared/proposals-mock';

@Component({
  moduleId: module.id,
  selector: 'esl-proposal-edit',
  templateUrl: 'proposal-edit.component.html',
  styleUrls: ['proposal-edit.component.css'],
  providers: [ ProposalService ]
})

export class ProposalEditComponent implements OnInit {

    editProposal: Proposal;
    private _proposalId: number;

    @Input()
    set proposalId(id: number) {
        if(id===undefined) return;
       this._proposalId = id;
       console.log('new id',id);
       this.getProposalById(this._proposalId); 
    }

    //EHI we forget to comunicate to parent that you have submitted something
     @Output('onSummit') onSubmitOutput: EventEmitter<Proposal> = new EventEmitter<Proposal>();


    // proposalFormGroup = new FormGroup ({
    //     formControlMoneyProposal: new FormControl()
    // })
    proposalForm: FormGroup;

    moneyProposalList: string[];
    companyProfileList: string[];
    nationalWorkProfileList: string[];

    constructor(private proposalService: ProposalService, private router: Router, public route: ActivatedRoute, private fb: FormBuilder) {
        this.createForm();
        console.log(" form constructor");
    }

    ngOnInit(): void {

        this.moneyProposalList = MONEY_PROPOSAL;
        this.companyProfileList = COMPANY_PROFILE;
        this.nationalWorkProfileList = NATIONAL_WORK_PROFILE;

        if (this.proposalId == undefined) { this.getProposalIdFromRoute(); }

        console.log("this.proposalId = " + this.proposalId);
    }

    /**
     * Gets proposal object by id
     * 
     * @param proposalId number
     */
    getProposalById(id: number) {

        this.proposalService.getProposalById(id).then(
            proposal => { 

                this.editProposal = proposal;
                console.log('proposal to edit',this.editProposal);
                this.proposalForm.setValue({
                    companyProfile: this.editProposal.companyProfile,
                    nationalWorkProfile: this.editProposal.nationalWorkProfile,
                    moneyProposal: this.editProposal.moneyProposal,
                    motivation: this.editProposal.motivation
                }); 
            },

            reason => { console.log("error: this.proposalService.getProposalById"); }
        );    
    }

    getProposalIdFromRoute() {

        this.route
            .params
            .subscribe(params => {
                console.log('hi');
                this.proposalId = params['id']; 
        });
    }

    createForm() {
        this.proposalForm = this.fb.group({
            companyProfile: [''],
            nationalWorkProfile: [''],
            moneyProposal: [ '' ],
            motivation: [ '', Validators.required ]
        });
    }

    onSubmit() {
        // deep copy
        const formModel = this.proposalForm.value;
        const editProposalCopy = _.cloneDeep(this.editProposal);
        
        editProposalCopy.companyProfile = formModel.companyProfile;
        editProposalCopy.nationalWorkProfile = formModel.nationalWorkProfile;
        editProposalCopy.moneyProposal = formModel.moneyProposal;
        editProposalCopy.motivation = formModel.motivation;
        console.log("onSumbit, editProposalCopy: " + JSON.stringify(editProposalCopy));

        this.proposalService.updateProposal(editProposalCopy).then( 
            (proposal:Proposal) => { console.log("sucess on edit: " + JSON.stringify(proposal));
          this.onSubmitOutput.emit(proposal);},
            (reason: any) => { console.log("error on edit");  this.onSubmitOutput.emit(undefined); }
        );

       
    }

    revert() {
        this.proposalForm.setValue({
                    companyProfile: this.editProposal.companyProfile,
                    nationalWorkProfile: this.editProposal.nationalWorkProfile,
                    moneyProposal: this.editProposal.moneyProposal,
                    motivation: this.editProposal.motivation
                }); 

        $('#myModal').modal('hide');
    }
}