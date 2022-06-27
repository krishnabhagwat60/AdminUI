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
      environment: new FormControl(''),
      numberProd: new FormControl(''),
      certExpiry: new FormControl(''),
    });
    this.getCertDetails();
  }

  getControl(name: string): string {
    return this.certHeaderForm.get(name)?.value;
  }

  applicationIdOnChange() {
    debugger;
    this.certHeaderForm.get('applicationId')?.valueChanges.subscribe((x) => {
      this.appId = x;
      if (this.certHeaderForm.touched || this.certHeaderForm.valid) {
        this.toastr.error('please give valid information');
      }
    });
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
      },
      {
        name: '32r1313131t23fr234f4f',
        entityId: 'https://lab.gfghfhf.4grfmr.com/',
        id: 'hfjjfgjgjfjjfgjgfjfhgfhhhhgf',
      },
      {
        name: '7567567567',
        entityId: 'https://lab.cbcbcb.4grfmr.com/',
        id: 'popopopopopo',
      },
      {
        name: '0505050505050',
        entityId: 'https://lab.fghgfhfhf.4grfmr.com/',
        id: 'iyiyiyiyiyiyiy',
      },
      {
        name: '91919191919',
        entityId: 'https://lab.fghfhvsdvc.4grfmr.com/',
        id: 'uiuiuiuiuiuiuii',
      },
      {
        name: '88889898989898',
        entityId: 'https://lab.home.4grfmr.com/',
        id: 'tetetetetetet',
      },
      {
        name: '6565656565656',
        entityId: 'https://lab.asda.4grfmr.com/',
        id: 'weewewewewewewe',
      },
      {
        name: 'ytwewewwewew',
        entityId: 'https://lab.dasdaerw.4grfmr.com/',
        id: '880808080',
      },
      {
        name: 'ddadadsadsads',
        entityId: 'https://lab.aeaea.4grfmr.com/',
        id: '555505',
      },
      {
        name: 'yyuyuyuyuyuyu',
        entityId: 'https://lab.aewe.4grfmr.com/',
        id: '55455455454545',
      },
      {
        name: 'pipipipip',
        entityId: 'https://lab.ptptpt.4grfmr.com/',
        id: '4454564',
      },
      {
        name: 'popooasas',
        entityId: 'https://lab.googogo.4grfmr.com/',
        id: '9090909',
      },
      {
        name: 'tuutututu',
        entityId: 'https://lab.google.4grfmr.com/',
        id: '80825',
      },
    ];

    this.applicationData = data;

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
