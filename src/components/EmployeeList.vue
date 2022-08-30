<template>
  <el-row class="main-container" v-loading.lock="loading">
    <el-row class="header-container">
      <el-col :lg="12" :md="12" :sm="12" :xs="12">
        <h1 class="header-title">{{  $t('listTitle')  }}</h1>
      </el-col>
      <el-col :lg="12" :md="12" :sm="12" :xs="12">
        <el-button icon="el-icon-circle-plus" @click="handleAddClick()" type="success" class="add-btn">{{  $t('listAddButton')  }}</el-button>
      </el-col>
    </el-row>
    <el-row class="table-container">
      <el-table :data="tableData" max-height="1000px">
        <el-table-column prop="firstName" :label="$t('firstNameLabel')" width="200" fixed></el-table-column>
        <el-table-column prop="lastName" :label="$t('lastNameLabel')" width="200" fixed></el-table-column>
        <el-table-column :label="$t('personalInformationTitle')" align="center">
          <el-table-column prop="dob" :label="$t('dobLabel')" width="200"></el-table-column>
          <el-table-column prop="gender" :label="$t('genderLabel')" width="200"></el-table-column>
          <el-table-column prop="mobile" :label="$t('mobileLabel')" width="200"></el-table-column>
          <el-table-column prop="email" :label="$t('emailLabel')" width="200"></el-table-column>
          <el-table-column prop="address.current" :label="$t('currentAddressLabel')" width="200"></el-table-column>
          <el-table-column prop="address.permanent" :label="$t('permanentAddressLabel')" width="200"></el-table-column>
          <el-table-column prop="city" :label="$t('cityLabel')" width="200"></el-table-column>
          <el-table-column prop="state" :label="$t('stateLabel')" width="200"></el-table-column>
          <el-table-column prop="zipCode" :label="$t('zipCodeLabel')" width="200"></el-table-column>
        </el-table-column>
        <el-table-column :label="$t('employeeDetailsTitle')" align="center">
          <el-table-column prop="employeeDetails.department" :label="$t('departmentLabel')" width="200">
          </el-table-column>
          <el-table-column prop="employeeDetails.position" :label="$t('positionLabel')" width="200">
          </el-table-column>
          <el-table-column prop="employeeDetails.skills" :label="$t('skillsLabel')" width="200">
            <template slot-scope="scope">{{  scope.row.employeeDetails.skills.join(', ')  }}</template>
          </el-table-column>
          <el-table-column prop="employeeDetails.type" :label="$t('typeLabel')" width="200">
          </el-table-column>
          <el-table-column prop="employeeDetails.salary" :label="$t('salaryLabel')" width="200" align="right">
            <template slot-scope="scope">{{  scope.row.employeeDetails.salary  }}</template>
          </el-table-column>
          <el-table-column prop="employeeDetails.isContract" :label="$t('contractLabel')" width="200">
            <template slot-scope="scope">{{  scope.row.employeeDetails.isContract  }}</template>
          </el-table-column>
          <el-table-column prop="employeeDetails.contract.startDate" :label="$t('contractStartLabel')" width="200">
          </el-table-column>
          <el-table-column prop="employeeDetails.contract.endDate" :label="$t('contractEndLabel')" width="200">
          </el-table-column>
        </el-table-column>
        <el-table-column :label="$t('bankDetailsTitle')" align="center">
          <el-table-column prop="bankDetails.bank" :label="$t('bankNameLabel')" width="200"></el-table-column>
          <el-table-column prop="bankDetails.branch" :label="$t('branchNameLabel')" width="200">
          </el-table-column>
          <el-table-column prop="bankDetails.accountNumber" :label="$t('accountNumberLabel')" width="200">
          </el-table-column>
          <el-table-column prop="bankDetails.ifsc" :label="$t('ifscLabel')" width="200"></el-table-column>
        </el-table-column>
        <el-table-column :label="$t('tableActionsLabel')" fixed="right" width="200" align="center">
          <template slot-scope="scope">
            <el-button icon="el-icon-edit" @click="handleEditClick(scope.row)" size="mini">{{  $t('editButton')  }}</el-button>
            <el-button icon="el-icon-delete" @click="handleDeleteClick(scope.row._id)" type="danger" size="mini">{{  $t('deleteButton')  }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </el-row>
</template>
<script>
import axios from 'axios'
export default {
  name: 'EmployeeList',
  data() {
    return {
      tableData: [],
      loading: false
    }
  },
  mounted() {
    this.fetchListItems()
    this.loading = true
  },
  methods: {
    async fetchListItems() {
      try {
        const res = await axios.get('https://my-koa-api.herokuapp.com/employee')
        this.tableData = res.data
        this.loading = false
      } catch (error) {
        this.loading = false
        console.log(error)
      }
    },
    handleAddClick() {
      this.$router.push('/form')
    },
    handleEditClick(row) {
      this.$router.push({ name: 'EmployeeForm', params: { id: row._id } })
    },
    handleDeleteClick(rowId) {
      this.loading = true
      this.$confirm(this.$t('deleteConfirmationMessage'),
        'Warning', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        type: 'warning'
      }).then(async () => {
        await axios.delete('https://my-koa-api.herokuapp.com/employee/' + rowId)
        this.$message({ type: 'success', message: this.$t('deleteMessage') })
        this.fetchListItems()
      }).catch(async () => {
        this.loading = false
        this.$message({ type: 'info', message: this.$t('deleteCancelMessage') })
      })
    }
  }
}
</script>

<style>
.header-title {
  text-align: left;
}

.add-btn {
  float: right;
  margin-top: 22px !important;
}

.header-container {
  text-align: center;
}

.main-container {
  padding: 0 10px;
}
</style>
