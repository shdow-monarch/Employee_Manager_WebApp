<template>
  <el-row class="form-main-container" v-loading.lock="loading">
    <el-row class="form-container">
      <el-row class="form-header">
        <h1 class="pageTitle">{{ isEditable ? $t('formEditTitle') : $t('formAddTitle') }}</h1>
      </el-row>
      <el-form v-if="isLoaded" ref="formData" :rules="formRules" :model="formData">
        <el-row class="personal-information">
          <h4>Personal Information:</h4>
          <el-row :gutter="15">
            <el-col :lg="6" :md="6" :sm="12" :xs="12">
              <el-form-item prop="firstName" :label="$t('firstNameLabel')">
                <el-input v-model="formData.firstName" type="text"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="6" :md="6" :sm="12" :xs="12">
              <el-form-item prop="lastName" :label="$t('lastNameLabel')">
                <el-input v-model="formData.lastName" type="text"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="6" :md="6" :sm="12" :xs="12">
              <el-form-item prop="dob" :label="$t('dobLabel')">
                <el-date-picker v-model="formData.dob" type="date" placeholder="Date" value-format="dd/MM/yyyy">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :lg="6" :md="6" :sm="12" :xs="12">
              <el-form-item class="genderContainer" prop="gender" :label="$t('genderLabel')">
                <el-radio-group v-model="formData.gender">
                  <el-radio label="male">Male</el-radio>
                  <el-radio label="female">Female</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="15">
            <el-col :lg="6" :md="6" :sm="12" :xs="12">
              <el-form-item prop="mobile" :label="$t('mobileLabel')">
                <el-input v-model.number="formData.mobile" type="text">
                  <template slot="prepend">+91</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="6" :md="6" :sm="12" :xs="12">
              <el-form-item prop="email" :label="$t('emailLabel')">
                <el-input v-model="formData.email" type="text"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="6" :md="6" :sm="12" :xs="12">
              <el-form-item prop="city" :label="$t('cityLabel')">
                <el-input v-model="formData.city" type="text"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="3" :md="3" :sm="12" :xs="12">
              <el-form-item prop="state" :label="$t('stateLabel')">
                <el-select v-model="formData.state" placeholder="State">
                  <el-option v-for="(item, index) in states" :key="index" :value="item" :label="item">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :lg="3" :md="3" :sm="12" :xs="12">
              <el-form-item prop="zipCode" :label="$t('zipCodeLabel')">
                <el-input v-model="formData.zipCode" type="text"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="15">
            <el-col :lg="12" :md="12" :sm="12" :xs="12">
              <el-form-item prop="address.current" :label="$t('currentAddressLabel')">
                <el-input v-model="formData.address.current" type="textarea" placeholder="Address">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :md="12" :sm="12" :xs="12">
              <el-form-item prop="address.permanent" :label="$t('permanentAddressLabel')">
                <el-input v-model="formData.address.permanent" type="textarea" placeholder="Address">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-row>
        <el-row class="employee-details">
          <h4>Employee Details:</h4>
          <el-row :gutter="15">
            <el-col :lg="6" :md="6" :sm="12" :xs="12">
              <el-form-item prop="employeeDetails.position" :label="$t('positionLabel')">
                <el-select v-model="formData.employeeDetails.position" placeholder="Select">
                  <el-option v-for="(item, index) in positions" :key="index" :value="item" :label="item">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :lg="6" :md="6" :sm="12" :xs="12">
              <el-form-item prop="employeeDetails.type" :label="$t('typeLabel')">
                <el-select v-model="formData.employeeDetails.type" placeholder="Select">
                  <el-option v-for="(item, index) in types" :key="index" :value="item" :label="item">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :lg="6" :md="6" :sm="12" :xs="12">
              <el-form-item prop="employeeDetails.skills" label="Skills">
                <el-select v-model="formData.employeeDetails.skills" multiple placeholder=" Select">
                  <el-option v-for="(item, index) in skillsList" :key="index" :value="item.name"
                    :label="item.displayName">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :lg="6" :md="6" :sm="12" :xs="12">
              <el-form-item prop="employeeDetails.salary" :label="$t('salaryLabel')">
                <el-input v-model.number="formData.employeeDetails.salary" type="text">
                  <template slot="append">PA</template>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="15">
            <el-col :lg="6" :md="6" :sm="12" :xs="12">
              <el-form-item :label="$t('contractLabel')">
                <el-switch v-model="formData.employeeDetails.isContract" active-color="#13ce66"
                  inactive-color="#ff4949">
                </el-switch>
              </el-form-item>
            </el-col>
            <el-col v-if="formData.employeeDetails.isContract" class="is-contract" :lg="6" md="6" sm="12" xs="12">
              <el-form-item :label="$t('contractStartLabel')">
                <el-date-picker v-model="formData.employeeDetails.contract.startDate" type="date"
                  placeholder="Join Date" value-format="dd/MM/yyyy">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col v-if="formData.employeeDetails.isContract" class="is-contract" :lg="6" md="6" sm="12" xs="12">
              <el-form-item :label="$t('contractEndLabel')">
                <el-date-picker type="date" v-model="formData.employeeDetails.contract.endDate" placeholder="End Date"
                  value-format="dd/MM/yyyy">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-row>
        <el-row class="bank-details" :gutter="15">
          <h4>Bank Details:</h4>
          <el-col :lg="6" :md="6" :sm="12" :xs="12">
            <el-form-item prop="bankDetails.bank" :label="$t('bankNameLabel')">
              <el-input v-model="formData.bankDetails.bank" type="text"></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="6" :sm="12" :xs="12">
            <el-form-item prop="bankDetails.branch" :label="$t('branchNameLabel')">
              <el-input v-model="formData.bankDetails.branch" type="text"></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="6" :sm="12" :xs="12">
            <el-form-item prop="bankDetails.accountNumber" :label="$t('accountNumberLabel')">
              <el-input v-model.number="formData.bankDetails.accountNumber" type="text"></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="6" :sm="12" :xs="12">
            <el-form-item prop="bankDetails.ifsc" :label="$t('ifscLabel')">
              <el-input v-model="formData.bankDetails.ifsc" type="text"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-row class="form-footer">
            <el-button @click="handleCancelClick">{{ $t('cancelButton') }}</el-button>
            <el-button @click="handleSaveClick()" type="success">{{ isEditable ? $t('saveButton') : $t('addButton') }}
            </el-button>
          </el-row>
        </el-form-item>
      </el-form>
    </el-row>
  </el-row>
</template>
<script>
import axios from 'axios'
import _ from 'lodash'
import Constants from '@/constants'
export default {
  name: 'EmployeeForm',
  data() {
    return {
      loading: false,
      isLoaded: false,
      states: Constants.STATE_LIST,
      skillsList: Constants.SKILL_LIST,
      departments: Constants.DEPARTMENT_LIST,
      positions: Constants.POSITION_LIST,
      types: Constants.EMPLOYEE_TYPE_LIST,
      formRules: Constants.EMPLOYEE_FORM_RULES,
      isEditable: false,
      constantFormData: Constants.EMPLOYEE_DETAIL,
      formData: _.cloneDeep(this.constantFormData),
      employeeList: []
    }
  },
  async mounted() {
    this.employeeList = (await axios.get('https://my-koa-api.herokuapp.com/employee')).data
    const id = this.$route.params.id
    this.formData = !_.isEmpty(id) ? (await axios.get('https://my-koa-api.herokuapp.com/employee/' + id)).data : _.cloneDeep(this.constantFormData)
    this.isEditable = !_.isEmpty(this.$route.params.id)
    this.isLoaded = true
    this.loading = false
  },
  methods: {
    handleCancelClick() {
      this.$refs.formData.resetFields()
      this.$router.push('/')
    },
    handleSaveClick() {
      this.loading = true
      this.$refs.formData.validate(async (valid) => {
        if (valid) {
          const payloadIndex = this.employeeList.findIndex(item => item._id === this.formData._id)
          const isAddNewItem = this.employeeList.some(item => item.firstName === this.formData.firstName && item.lastName === this.formData.lastName)
          if (this.$route.params.id) {
            if (this.employeeList.find((item, index) => item.firstName === this.formData.firstName && item.lastName === this.formData.lastName && index !== payloadIndex)) {
              this.loading = false
              return this.$message({ type: 'error', message: this.$t('alreadyExistMessage') })
            } else {
              await axios.put('https://my-koa-api.herokuapp.com/employee/' + this.$route.params.id, this.formData)
              this.$refs.formData.resetFields()
              this.$router.push('/')
              this.loading = false
            }
          } else {
            if (!isAddNewItem) {
              await axios.post('https://my-koa-api.herokuapp.com/employee', this.formData)
              this.$refs.formData.resetFields()
              this.$router.push('/')
              this.loading = false
            } else {
              this.loading = false
              return this.$message({ type: 'error', message: this.$t('alreadyExistMessage') })
            }
          }
          this.loading = false
          this.$message({ type: 'success', message: _.isEmpty(!this.$route.params.id) ? this.$t('updateMessage') : this.$t('addMessage') })
        }
        else {
          this.loading = false
          this.$message({ type: 'error', message: this.$t('formValidationMessage') })
        }
      })
    }
  }
}
</script>

<style>
.el-text-input {
  width: 500px;
}

.form-main-container .form-container .el-date-editor.el-input,
.form-main-container .form-container .el-date-editor.el-input__inner {
  width: 100% !important;
}

.form-main-container .form-container .el-select {
  display: block;
}

.form-main-container {
  padding: 15px;
}

.pageTitle {
  margin: 0;
  padding-bottom: 15px;
  border-bottom: 1px solid #e9e9e9;
}

.el-form-item__label {
  text-align: left !important;
  float: none !important;
}

.form-footer {
  float: right;
}
</style>