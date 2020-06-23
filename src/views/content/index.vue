<template>
<el-row style="min-height:inherit">
  <el-col :span="4" style="min-height:inherit">
    <el-menu style="min-height:inherit"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="2">
        <i class="el-icon-s-operation"></i>
        <span slot="title">歡迎詞</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-s-operation"></i>
        <span slot="title">呼叫客服</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-circle-plus-outline"></i>
        <span slot="title">新增腳本</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="20">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="觸發條件" name="first">觸發條件</el-tab-pane>
      <el-tab-pane label="檢查條件" name="second">檢查條件</el-tab-pane>
      <el-tab-pane label="行為" name="third" style="padding:15px;">
        <el-row :gutter="20">
          <el-col :span="8">
            <h3 style="margin: 10px 0;">傳送訊息1</h3>
            <div class="dflex vertical">
              <div class="dflex align-center" style="margin-bottom:15px">
                <div style="white-space: nowrap; margin-right:10px;">訊息類別</div>
                <el-select v-model="value" placeholder="请选择" style="width:100%;">
                  <el-option label="卡片" value="a"></el-option>
                </el-select>
              </div>
              <el-card id="card" shadow="never">
                <div class="dflex align-center" style="margin-bottom:10px;">
                  <i class="el-icon-picture-outline" style="font-size:20px;margin-right:10px;"></i>
                  <el-select v-model="value" placeholder="请选择" style="width:100%;">
                    <el-option label="上傳" value="a"></el-option>
                  </el-select>
                </div>
                <img src="https://img.freepik.com/free-photo/pizza-slices-marble-chopping-board_23-2147926088.jpg?size=626&ext=jpg" class="image">
                <div>
                  <div class="title">標題</div>
                  <div >
                    <el-input
                        type="text"
                        placeholder="请输入内容"
                        v-model="title"
                        maxlength="40"
                        show-word-limit/>
                  </div>
                  <div class="title">內容</div>
                  <el-input
                      type="textarea"
                      :rows="2"
                      placeholder="请输入内容"
                      v-model="content"
                      maxlength="60"
                      show-word-limit/>
                  <div class="dflex align-center" style="justify-content: center;margin-top:10px">
                    <el-button icon="el-icon-circle-plus-outline" type="text" class="button">新增操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="8">
            <el-button icon="el-icon-circle-plus-outline">新增訊息</el-button>
          </el-col>
          <el-col :span="8"></el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-col>
</el-row>
</template>
<script>
export default {
  data () {
    return {
      value: 'a',
      activeName: 'third',
      title: '黑糖珍珠Pizza',
      content: '',
    }
  }
}
</script>
<style lang="scss" scoped>
.dflex {
  display: flex;

  &.vertical {
    flex-direction: column
  }

  &.align-center {
    align-items: center;
  }
}

#card {

  .image {
    height: auto;
    width: 100%;
  }
  .title {
    margin: 10px 0;
  }
}
</style>
