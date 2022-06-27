import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ICert } from '../models/cert.model';
import { ToastrService } from 'ngx-toastr';
import { AppData } from '../models/cert.app.model';
import { CertService } from '../services/cert.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  qaPROD = '';
  title = 'toaster-not';
  public loading = false;
  certList!: ICert;
  certHeaderForm!: FormGroup;
  environments: any = [
    { id: 'QAProd', text: 'QA / Prod' },
    { id: 'qa', text: 'QA' },
    { id: 'prod', text: 'Prod' },
  ];
  ifNoData!: Boolean;
  appId!: string;
  applicationid!: string;
  applicationData: any[] = [];
  isChecked: any;
  isCheckedName: any;
  isSelectedName: any;
  entityId: any;
  applicationName: any;
  certExpiry: any;
  isApplicationButtonEnable: any;
  constructor(
    private certService: CertService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.ifNoData = true;
    this.certHeaderForm = new FormGroup({
      applicationId: new FormControl('', Validators.required),
      environment: new FormControl('', Validators.required),
      numberProd: new FormControl(''),
      certExpiry: new FormControl(''),
    });
  }

  getControl(name: string): string {
    return this.certHeaderForm.get(name)?.value;
  }

  applicationIdOnChange() {
    debugger
    if(this.certHeaderForm.get('applicationId')?.value.length>0 && this.certHeaderForm.get('environment')?.value.length>0){
      this.getCertDetails(this.certHeaderForm.get('applicationId')?.value)
    }
    else{
      this.applicationData=[];
    }
    debugger;
    // this.certHeaderForm.get('applicationId')?.valueChanges.subscribe((x) => {
    //   this.appId = x;
    //   if (this.certHeaderForm.touched || this.certHeaderForm.valid) {
    //     this.toastr.error('please give valid information');
    //   }
    // });
    //   if(!event.value.touched || !event.value.valid){
    //     this.toastr.error("please give valid information");
    // }
    // this.getCertDetails(event.value);
  }

  // Will be added when Environment is considered
  // changeEnvironment(event: any){
  //   this.evnSelected?.setValue(event.target.value, {

  //   });
  // }

  getCertDetails(applicationId?: string) {
    let filedata = new AppData(
      this.certHeaderForm.get('applicationId')?.value,
      'a123456'
    );
    this.loading = true;

    var data = [
      {
        name: 'AP130074_EI_SAML_AnsibleAWX_DEV',
        entityId: 'https://lab.awx.fmr.com/',
        id: 'iziqz5trx0bw0e3b31x6iqegf',
      },
      {
        name: 'asdgasdg',
        entityId: 'https://lab.erer.4grfmr.com/',
        id: 'gasdgasdgasdgg',
      },
      {
        name: '32rt23fr234f4f',
        entityId: 'https://lab.opopopo.4grfmr.com/',
        id: 'hfghgfhhhhgf',
      }
    ];

    this.applicationData = data;
    if (this.applicationData && this.applicationData.length > 0) {
      this.applicationData.forEach((element, index) => {
        if (element.id == 'izgkjfgafgsajfg') {
          // certExpiry
          this.applicationData[index]["certExpiry"] ='Jan 20 2022';
        }
        else{
          this.applicationData[index]["certExpiry"] ='may 20 , 2023';
        }
      });

    }
    this.certService.getCertDetails(filedata).subscribe(
      (data: any) => {
        //this.certList = data;
        console.log(data);
        if (data[0]?.id == 'izgkjfgafgsajfg') {
          this.certHeaderForm.patchValue({
            applicationName: data[0].name,
            entityId: data[0].entityId,
            certExpiry: 'Jan 20 2022',
          });
        }
        this.certHeaderForm.setValue({
          applicationName: data[0].name,
          entityId: data[0].entityId,
          certExpiry: 'may 20 , 2023',
        });
        this.ifNoData = false;
      },
      (error: any) => {
        this.loading = false;
        this.toastr.error(error);
        this.ifNoData = true;
      }
    );
  }

  updateCert() {
    let filedata = new AppData(
      this.certHeaderForm.get('applicationId')?.value,
      'a123456'
    );
    this.loading = true;

    this.certService.updateCert(filedata).subscribe(
      (data: any) => {
        //this.certList = data;
        console.log(data);
        if (data[0]?.id == 'izgkjfgafgsajfg') {
          this.certHeaderForm.patchValue({
            applicationName: data[0].name,
            entityId: data[0].entityId,
            certExpiry: 'Jan 20 2022',
          });
        }
        this.certHeaderForm.setValue({
          applicationName: data[0].name,
          entityId: data[0].entityId,
          certExpiry: 'may 20 , 2023',
        });
        this.ifNoData = false;
      },
      (error: any) => {
        this.loading = false;
        this.toastr.error(error);
        this.ifNoData = true;
      }
    );
  }

  applicationCheckEvent(event: any) {
    debugger;
    console.log(event);
    this.isSelectedName = event.name;
  }

  onChange(event: any) {
    this.isApplicationButtonEnable = event.target.checked;
  }

  editEntityEvent(event: any) {
    this.entityId = event.target.value;
  }

  editNameEvent(event: any) {
    this.applicationName = event.target.value;
  }

  editCertEvent(event: any) {
    this.certExpiry = event.target.value;
  }

  revertCert() {
    let filedata = new AppData(
      this.certHeaderForm.get('applicationId')?.value,
      'a123456'
    );
    this.loading = true;

    this.certService.revertCert(filedata).subscribe(
      (data: any) => {
        //this.certList = data;
        console.log(data);
        if (data[0]?.id == 'izgkjfgafgsajfg') {
          this.certHeaderForm.patchValue({
            applicationName: data[0].name,
            entityId: data[0].entityId,
            certExpiry: 'Jan 20 2022',
          });
        }
        this.certHeaderForm.setValue({
          applicationName: data[0].name,
          entityId: data[0].entityId,
          certExpiry: 'may 20 , 2023',
        });
        this.ifNoData = false;
      },
      (error: any) => {
        this.loading = false;
        this.toastr.error(error);
        this.ifNoData = true;
      }
    );
  }
}
