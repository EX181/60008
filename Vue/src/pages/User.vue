
<template>
  <div class="user-info">
    <el-card class="user-card" shadow="hover">
      <div class="user-content">
        <el-row justify="center" align="middle">
          <el-col :span="8">
            <p class="user-text">
              <strong>Your ID is:</strong> {{ userId || 'Not Found' }}
            </p>
          </el-col>
          <el-col :span="8">
            <p class="user-text">
              <strong>Your Username is</strong> {{ userName || 'Not Found' }}
            </p>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'User',
  data() {
    // 从 sessionStorage 获取存储的用户信息并解析为 JSON 对象
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));

    return {
      // 提取 JSON 对象中的 id 和 username
      userId: userInfo ? userInfo.id : null,
      userName: userInfo ? userInfo.username : null,
    };
  },
};
</script>

<style scoped>
.user-card {
  max-width: 600px;
  margin: 20px auto;
  background-color: #f9f9f9;
}

.user-content {
  padding: 20px;
}

.user-item {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.user-title {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
}

.user-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: #409EFF;
  text-align: center;
  padding: 10px;
  background-color: #f0f9ff;
  border-radius: 8px;
}
</style>