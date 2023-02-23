<template>
  <div>
    <!--开启摄像头-->
    <div class="imagbtn">
      <img
        @click="callCamera"
        style="height: 100px; width: 100px"
        :src="headImgSrc"
        alt="摄像头"
      />
      <img
        @click="closeCamera"
        style="height: 100px; width: 100px"
        :src="closeImgSrc"
        alt="关闭摄像头"
      />
      <!--确认-->
      <el-button v-if="isnotbtn" class="querybtn" size="mini" type="primary" @click="photograph">确认</el-button>
    </div>
    <!--canvas截取流-->
    <canvas ref="canvas" v-show="isnotbtn" width="640" height="480"></canvas>
    <!--图片展示-->
    <video ref="video"  v-show="isnotbtn" width="640" height="480" autoplay></video>
  </div>
</template>
<script>

import image from '@/assets/images/meinv.jpg'

export default {
  name: 'PageTwo',
  data() {
    return {
      headImgSrc: image,
      closeImgSrc: image,
      isnotbtn: false,
      isnotcanvas: false
    }
  },
  methods: {
    // 调用摄像头
    callCamera() {
      // H5调用电脑摄像头API
      navigator.mediaDevices
        .getUserMedia({
          video: true
        })
        .then((success) => {
          this.isnotbtn = true
          // 摄像头开启成功
          this.$refs.video.srcObject = success
          // 实时拍照效果
          this.$refs.video.play()
          // eslint-disable-next-line handle-callback-err
        }).catch(error => {
          this.$message.error(
            '摄像头开启失败，请检查摄像头是否可用！或者打开摄影头'
          )
          console.error('摄像头开启失败，请检查摄像头是否可用！')
        })
    },

    // 拍照
    photograph() {
      const ctx = this.$refs.canvas.getContext('2d')
      // 把当前视频帧内容渲染到canvas上
      ctx.drawImage(this.$refs.video, 0, 0, 640, 480)
      // 转base64格式、图片格式转换、图片质量压缩
      const imgBase64 = this.$refs.canvas.toDataURL('image/jpeg', 0.7) // 由字节转换为KB 判断大小

      const str = imgBase64.replace('data:image/jpeg;base64,', '')
      const strLength = str.length
      const fileLength = parseInt(strLength - (strLength / 8) * 2) // 图片尺寸  用于判断
      const size = (fileLength / 1024).toFixed(2)
      console.log(size) // 上传拍照信息  调用接口上传图片 .........

      // 保存到本地
      this.dialogCamera = false
      const ADOM = document.createElement('a')
      ADOM.href = imgBase64
      ADOM.download = new Date().getTime() + '.jpeg'
      ADOM.click()
    },
    // 关闭摄像头
    closeCamera() {
      if (!this.$refs.video.srcObject) {
        this.dialogCamera = false
        return
      }
      const stream = this.$refs.video.srcObject
      const tracks = stream.getTracks()
      tracks.forEach((track) => {
        track.stop()
      })
      this.$refs.video.srcObject = null
      this.isnotbtn = false
    }
  }
}
</script>
<style scoped>
  .imagbtn {
    display: flex;
    align-content: center;
    justify-content: start;
  }
  .querybtn{
    width: 50px;
    height: 50px;
    margin: auto 0;
    border-radius: 15px;
    /* font-size:30px; */
  }
</style>
