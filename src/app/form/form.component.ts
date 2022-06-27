import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICert } from '../models/cert.model';
import { ToastrService } from 'ngx-toastr';
import { AppData } from '../models/cert.app.model';
import { NotificationService } from '../NotificationService';
import { CertService } from '../services/cert.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  qaPROD = '';
  title = 'toaster-not';
  public loading = false;
  certList!: ICert;
  certForm!: FormGroup;
  environment: any = ['QA', 'PROD'];
  ifNoData!: Boolean;
  appId!: string;
  applicationid!: string;

  constructor(
    private certService: CertService,
    private fb: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.ifNoData = true;
    this.certForm = new FormGroup({
      applicationId: new FormControl('', Validators.required),
      applicationName: new FormControl(''),
      //environmentName: new FormControl(),
      entityId: new FormControl(''),
      certExpiry: new FormControl('')
    })
  }

  applicationIdOnChange() {
    this.certForm.get("applicationId")?.valueChanges.subscribe(x => {
      this.appId = x;
      if (this.certForm.touched || this.certForm.valid) {
        this.toastr.error("please give valid information");
      }
    })
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

  getCertDetails(applicationId: string) {
    let filedata = new AppData(this.certForm.get("applicationId")?.value, "a123456");
    this.loading = true;
    this.certService.getCertDetails(filedata).subscribe((data:any) => {
      //this.certList = data;
      console.log(data)
      if (data[0]?.id == "izgkjfgafgsajfg") {
        this.certForm.patchValue({
          applicationName: data[0].name,
          entityId: data[0].entityId,
          certExpiry: "Jan 20 2022"
        })
      }
      this.certForm.setValue({
        applicationName: data[0].name,
        entityId: data[0].entityId,
        certExpiry: "may 20 , 2023"
      })
      this.ifNoData = false;
    },
      (error:any) => {
        this.loading = false;
        this.toastr.error(error);
        this.ifNoData = true;
      });
  }

  updateCert() {
    let filedata = new AppData(this.certForm.get("applicationId")?.value, "a123456");
    this.loading = true;


    this.certService.updateCert(filedata).subscribe((data:any) => {
      //this.certList = data;
      console.log(data)
      if (data[0]?.id == "izgkjfgafgsajfg") {
        this.certForm.patchValue({
          applicationName: data[0].name,
          entityId: data[0].entityId,
          certExpiry: "Jan 20 2022"
        })
      }
      this.certForm.setValue({
        applicationName: data[0].name,
        entityId: data[0].entityId,
        certExpiry: "may 20 , 2023"
      })
      this.ifNoData = false;
    },
      (error:any) => {
        this.loading = false;
        this.toastr.error(error);
        this.ifNoData = true;
      });
  }


  revertCert() {
    let filedata = new AppData(this.certForm.get("applicationId")?.value, "a123456");
    this.loading = true;


    this.certService.revertCert(filedata).subscribe((data:any) => {
      //this.certList = data;
      console.log(data)
      if (data[0]?.id == "izgkjfgafgsajfg") {
        this.certForm.patchValue({
          applicationName: data[0].name,
          entityId: data[0].entityId,
          certExpiry: "Jan 20 2022"
        })
      }
      this.certForm.setValue({
        applicationName: data[0].name,
        entityId: data[0].entityId,
        certExpiry: "may 20 , 2023"
      })
      this.ifNoData = false;
    },
      (error:any) => {
        this.loading = false;
        this.toastr.error(error);
        this.ifNoData = true;
      });
  }

}
