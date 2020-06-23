<template>
<div>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-calendar v-model="date"></el-calendar>
    </el-col>
    <el-col :span="6">
      <h3>可預約時段</h3>
        <div class="list">
          <div>
            <el-radio v-model="radio" label="1" class="item">平日 / 10:30 ~ 11:50</el-radio>
            <el-button size="small" type="primary" round>4~8位</el-button>
          </div>

          <div>
            <el-radio v-model="radio" label="2" class="item">平日 / 12:00 ~ 13:20</el-radio>
            <el-button size="small" type="primary" round>4~8位</el-button>
          </div>
          <div>
            <el-radio v-model="radio" label="3" class="item">平日 / 13:30 ~ 14:50</el-radio>
            <el-button size="small" type="primary" round>4~8位</el-button>
          </div>
          <div>
            <el-radio v-model="radio" label="4" class="item">平日 / 15:00 ~ 16:20</el-radio>
            <el-button size="small" type="primary" round>4~8位</el-button>
          </div>
          <div>
            <el-radio v-model="radio" label="5" class="item">平日 / 16:30 ~ 17:50</el-radio>
            <el-button size="small" type="primary" round>4~8位</el-button>
          </div>
          <div>
            <el-radio v-model="radio" label="6" class="item">平日 / 16:30 ~ 17:50</el-radio>
            <el-button size="small" type="primary" round>4~8位</el-button>
          </div>
          <div>
            <el-radio v-model="radio" label="7" class="item" disabled>平日 / 18:00 ~ 19:20</el-radio>
            <el-button size="small" type="info" round disabled>售完</el-button>
          </div>
          <div>
            <el-radio v-model="radio" label="8" class="item" disabled>平日 / 19:30 ~ 20:50</el-radio>
            <el-button size="small" type="info" round disabled>售完</el-button>
          </div>
          <div>
            <el-radio v-model="radio" label="9" class="item" disabled>平日 / 21:00 ~ 22:20</el-radio>
            <el-button size="small" type="info" round disabled>售完</el-button>
          </div>
        </div>
    </el-col>
    <el-col :span="5">
      <h3>項目</h3>
      <div class="list price">
        <el-radio v-model="radio1" label="4" class="item">
          <div class="content">
            <span class="name">4人包場價 (349元/人)</span>
            <span class="price">$1,396</span>
          </div>
        </el-radio>
        <el-radio v-model="radio1" label="5" class="item">
          <div class="content">
            <span class="name">5人包場價 (349元/人)</span>
            <span class="price">$1,745</span>
          </div>
        </el-radio>
        <el-radio v-model="radio1" label="6" class="item">
          <div class="content">
            <span class="name">6人包場價 (299元/人)</span>
            <span class="price">$1,794</span>
          </div>
        </el-radio>
        <el-radio v-model="radio1" label="7" class="item">
          <div class="content">
            <span class="name">7人包場價 (299元/人)</span>
            <span class="price">$2,093</span>
          </div>
        </el-radio>
        <el-radio v-model="radio1" label="8" class="item">
          <div class="content">
            <span class="name">8人包場價 (287元/人)</span>
            <span class="price">$2,300</span>
          </div>
        </el-radio>
      </div>
      <!-- <div style="display: flex;justify-content: space-between;">
        <span>總共</span>
        <span style="font-size: 30px;color: #f75f5f;">$ 2,093</span>
      </div> -->
      <div>
        <el-button type="primary">下一步</el-button>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col>
      
    </el-col>
  </el-row>
</div>
</template>
<script>
export default {
  data () {
    return {
      date: '',
      radio: '5',
      radio1: '7'
    }
  }
}
</script>
<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  .item {
    margin-top: 15px;
  }

  &.price .item {
    .content {
      display: inline-flex;
      flex-direction: column;
    }

    .name {
      font-size: 17px;
      margin-bottom: 8px;
    }

    .price {
      font-size: 14px;
      color: #a2a0a0;
    }
  }
}
</style>
<style>
.list .item .el-radio__label{
  font-size: 15px;
}

.list.price .item .el-radio__label{
  font-size: 16px;
}


.el-calendar-table .el-calendar-day {
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-calendar-table td.is-today .el-calendar-day span{
  background: #1890ff;
  border-radius: 50%;
  color: white;
  height: 35px;
  width: 35px;
  line-height: 35px;
  text-align: center;
}
</style>