<template>
  <div id="coupon">
    <h2>建立優惠券</h2>
    <el-divider />
    <el-col :span="12">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="優惠券名稱">
          <el-col :span="8">
            <el-input v-model="form.name" maxlength="30" show-word-limit />
          </el-col>
        </el-form-item>
        <el-form-item label="領取起始時間">
          <el-date-picker
            v-model="form.date1"
            type="date"
            placeholder="选择日期"
          />
          <el-time-select
            v-model="form.time1"
            placeholder="选择时间"
          />
        </el-form-item>
        <el-form-item label="領取結束時間">
          <el-date-picker
            v-model="form.date2"
            type="date"
            placeholder="选择日期"
          />
          <el-time-select
            v-model="form.time2"
            placeholder="选择时间"
          />
        </el-form-item>
        <el-form-item label="有效起始時間">
          <el-date-picker
            v-model="form.date3"
            type="date"
            placeholder="选择日期"
          />
          <el-time-select
            v-model="form.time3"
            placeholder="选择时间"
          />
        </el-form-item>
        <el-form-item label="有效結束時間">
          <el-date-picker
            v-model="form.date4"
            type="date"
            placeholder="选择日期"
          />
          <el-time-select
            v-model="form.time4"
            placeholder="选择时间"
          />
        </el-form-item>
        <el-form-item label="圖片上傳">

          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
          <ol>
            <li>上傳的圖片，長:寬必須是1.91 : 1</li>
            <li>檔案大小上限10MB</li>
          </ol>
        </el-form-item>
        <el-form-item label="優惠券簡介">
          <el-col :span="8">
            <el-input
              v-model="form.textarea1"
              type="textarea"
              placeholder="請簡單說明優惠券內容"
              maxlength="60"
              show-word-limit
            />
          </el-col>
        </el-form-item>
        <el-form-item label="使用說明">
          <div style="width:400px;">
            <el-input
              v-model="form.textarea2"
              type="textarea"
              placeholder="請條列撰寫使用說明"
              maxlength="300"
              show-word-limit
            />
          </div>
        </el-form-item>
        <el-form-item label="優惠代碼">
          <div style="width:400px;">
            <el-input v-model="form.code" maxlength="15" show-word-limit />
          </div>
        </el-form-item>
        <el-form-item label="優惠券類型">
          <el-select v-model="form.region" placeholder="請選擇類型">
            <el-option label="折扣" value="shanghai" />
            <el-option label="免費" value="beijing" />
            <el-option label="贈品" value="beijing" />
            <el-option label="其他" value="beijing" />
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;" />
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker v-model="form.date2" placeholder="选择时间" style="width: 100%;" />
          </el-col>
        </el-form-item> -->
        <!-- <el-form-item label="即时配送">
          <el-switch v-model="form.delivery" />
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type" />
            <el-checkbox label="地推活动" name="type" />
            <el-checkbox label="线下主题活动" name="type" />
            <el-checkbox label="单纯品牌曝光" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助" />
            <el-radio label="线下场地免费" />
          </el-radio-group>
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary">儲存</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="12">
      <p>優惠券領取連結：</p>
      <el-form>
        <el-form-item>
          <img :src="qrcodeUrl" style="height:200px">
        </el-form-item>
        <el-form-item>
          <el-input v-model="shortUrl" suffix-icon="el-icon-document-copy" readonly />
        </el-form-item>
      </el-form>
    </el-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '6人同行1人免費',
        date1: '2020-01-01',
        date2: '2020-01-31',
        date3: '2020-01-01',
        date4: '2020-10-31',
        region: '',
        code: '6PEOPLE',
        time1: '00:00',
        time2: '23:59',
        time3: '00:00',
        time4: '23:59',
        textarea1: '使用期限：至2020/10/31截止',
        textarea2: `・本優惠券適用於異世客任一遊戲。
・本優惠券同時適用於網路預訂與現場折抵，若現場使用請出示優惠券，線上使用請於異世客官網訂購表單內輸入優惠代碼。
・同一團玩家只適用一張優惠券，無法同時使用多張。`,
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      imageUrl: 'https://scontent.ftpe11-1.fna.fbcdn.net/v/t1.0-9/86373544_504806550218819_992282516486356992_o.jpg?_nc_cat=109&_nc_sid=6e5ad9&_nc_oc=AQl9D6crq6mDerSbgLfhgZezxNCWmI6P8WnlXdK6wVnNfsq3waYAp1ZXBcMAn-5Hy8o&_nc_ht=scontent.ftpe11-1.fna&oh=f8714a94f3d1c9988e3ccfb56a7bf8ff&oe=5F16E9B9',
      qrcodeUrl: 'https://store-images.s-microsoft.com/image/apps.33967.13510798887182917.246b0a3d-c3cc-46fc-9cea-021069d15c09.392bf5f5-ade4-4b36-aa63-bb15d5c3817a',
      shortUrl: 'https://ae.sirt/QJEOIJ87QI121W1W6M3QP293'
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>
<style lang="scss" scoped>
#coupon {
  padding: 20px;
}
</style>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 340px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 340px;
  height: 178px;
  display: block;
}
</style>
