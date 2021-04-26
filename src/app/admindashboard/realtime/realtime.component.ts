import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device';
import { AdminServiceService } from 'src/app/services/admin-service.service';
@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.css']
})
export class RealtimeComponent implements OnInit {
  reference:any;
  item:any;
  dataSource= [];
  devices:Device[]=[];
  constructor(private adminService: AdminServiceService) { }

  ngOnInit(): void {
    this.readData();
  }

  listDevices() {
    this.adminService.listdevicesByIDCT().subscribe(
      data => {

        this.devices = data;

              },err=>{console.log(err)})

            }

            getDisplayExpr(item) {
              if(!item) {
                  return "";
              }

              return item.nameConstraint ;
          }


          getDisplay(item) {
            if(!item) {
                return "";
            }

            return item.name ;
        }

  readData() {
    this.adminService.listConstraints().subscribe(
      data => {

        this.dataSource = data;

        console.log(data);
      },

      err=> {
        console.log(err);

      }
    );
  }
}
