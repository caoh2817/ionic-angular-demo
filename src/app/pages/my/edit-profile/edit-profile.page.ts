import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '../../../shared/services/auth0.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  userProfile: any;
  loaded: boolean = false;

  constructor(private auth: Auth0Service) {
    // console.log(this.auth.getOwnerId());
  }

  ngOnInit() {
    this.getUser();
  }

  saveProfile() {
    // 处理编辑个人资料的逻辑
    // 保存用户信息并更新到后端服务器
  }

  getUser() {
    // 获取用户信息
    this.loaded = false;
    this.auth.getUser().subscribe(
      (user) => {
        this.userProfile = user;
        this.loaded = true;
      },
      (err) => {
        console.log(err);
        this.loaded = true;
      },
    );
  }
}
