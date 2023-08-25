import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { ThirdPartyService } from '../thirdparty/thirdparty.service'

@Injectable()
export class UserService {
  constructor(
    private readonly thirdPartyService: ThirdPartyService, 
    ) {}
  private readonly user: User[] = []

  async getAllUser() {
    return await this.thirdPartyService.getAllUserAPI()
  }

  async getAllUserDetail() {
    return await this.thirdPartyService.getAllUserDetail()
  }

  async AllUserInfo(): Promise<User []> {
    let allUserInfo = []
    let users = await this.getAllUser()
    let userDetails = await this.getAllUserDetail()
    
    for (let i = 1; i <= users.length; i++) {
      let user = users.find((user) => parseInt(user.id) == i)
      let userDetail = userDetails.find((userDetail) => parseInt(userDetail.id) == i)
      let obj = { ...user, ...userDetail }
      allUserInfo.push(obj)
    }
    return allUserInfo
  }

  filterJobType(users: User[], jobType: string): User [] {
    return users.filter(user => user.jobType === jobType)
  }

  filterDate(users: User[], createdFrom: string, createdTo: string): User [] {
    return users.filter(user => 
      (new Date(user.createdAt) >= new Date(createdFrom))
      &&
      (new Date(user.createdAt) <= new Date(createdTo))
      )
  }
  
  // This function shouldn't be this file. lazy to create new folfer
  filterPagination(users: User[], page: number = 1): Object {
    let total_page = Math.ceil(users.length / 10)
    let result = {
      page: page,
      total_page: total_page,
      result: users.slice(10 * (page - 1), 10 * page)
    }
    return result
  }

  async findAllUser(query): Promise<Object> {
    // check query param 
    let page = (typeof query.page === "string") ? parseInt(query.page) : 1
    let isJobType = (typeof query.jobType === "string") ? query.jobType : ""
    let isCreatedFrom = (typeof query.createdFrom === "string") ? query.createdFrom : ""
    let isCreatedTo = (typeof query.createdTo === "string") ? query.createdTo : ""
    let allUsetInfo = await this.AllUserInfo()
    // filter job
    if(isJobType && !isCreatedFrom && !isCreatedTo) {
      // this could be optimised
      return this.filterPagination(this.filterJobType(allUsetInfo, query.jobType), page)
    }
    // filter data
    if(!isJobType && isCreatedFrom && isCreatedTo) {
      // this could be optimised
      return this.filterPagination(this.filterDate(allUsetInfo, query.createdFrom, query.createdTo), page)
    }

    // all filter
    if(isJobType && isCreatedFrom && isCreatedTo) {
      let filterJobTypeUser = this.filterJobType(allUsetInfo, query.jobType)
      return this.filterPagination(this.filterDate(filterJobTypeUser, query.createdFrom, query.createdTo), page)
    }
    return this.filterPagination(allUsetInfo, page)
  }
}