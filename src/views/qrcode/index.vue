<template>
  <el-row class="wrapper">
    <el-col :span="8">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="活動名稱">
          <el-input v-model="form.a"></el-input>
        </el-form-item>
        <el-form-item label="活動時間">
          <el-input v-model="form.b"></el-input>
        </el-form-item>
        <el-form-item label="活動類別">
          <el-input v-model="form.c"></el-input>
        </el-form-item>
        <el-form-item label="人數">
          <el-input v-model="form.d"></el-input>
        </el-form-item>
        <el-form-item label="Group ID">
          <el-input v-model="form.e"></el-input>
        </el-form-item>
        <el-form-item label="地點">
          <el-input v-model="form.f"></el-input>
        </el-form-item>
        <el-form-item label="客單價">
          <el-input v-model="form.g"></el-input>
        </el-form-item>
        <el-form-item label="難度星等">
          <el-input v-model="form.h"></el-input>
        </el-form-item>
        <el-form-item label="折價券價格">
          <el-input v-model="form.i"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button>清除</el-button>
          <el-button type="primary">生成QRCode</el-button>
        </el-form-item>
      </el-form>
      
    </el-col>
    <el-col :span="8">
      <img src="@/assets/QRCode.png" id="qrcode" alt="" srcset="">
    </el-col>
    <el-col :span="8"></el-col>
  </el-row>
</template>
<script>
export default {
  data () {
    return {
      form: {
        a: '森林之心',
        b: '2019-12-15',
        c: '洞察遊戲',
        d: '8',
        e: '35e32b',
        f: '台中市',
        g: '325',
        h: '3',
        i: '0',
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  padding: 20px 10px;
}
#qrcode {
  height: 200px;
  margin: 0 50px;
}
</style>