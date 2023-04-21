<template>
	<view class="contenter">
		<u-sticky>
			<view class="uni-box-head">
				<uni-title type="h1" align="center" title="角色扮演"></uni-title>
			</view>
		</u-sticky>
		<view>
		</view>
		<view class="role-model">
				<view v-for="(item,index) in roleData" class="role">
					<view v-if="item.isSelected" class="badge-box">
						<u-badge shape="horn" value="已选择"></u-badge>
					</view>
					<view class="image">
						 <u--image shape="circle" :showLoading="true" :src="item.roleImage" width="100px" height="100px" @click="selected(index)"></u--image>
					</view>
					<view class="name">{{item.roleName}}</view>
				</view>
		</view>
	</view>
</template>

<script>
		export default {
			data() {
				return {
					selectedRoleIndex:0,
					roleData: [
						{
							'roleImage':'../../../../static/role/boss.png',
							'roleName':'老板',
							'isSelected':true,
						},
						{
							'roleImage':'../../../../static/role/chushi.png',
							'roleName':'厨师',
							'isSelected':false
						},
						{
							'roleImage':'../../../../static/role/doctor.png',
							'roleName':'医生',
							'isSelected':false
						},
						{
							'roleImage':'../../../../static/role/layer.png',
							'roleName':'律师',
							'isSelected':false
						},
						{
							'roleImage':'../../../../static/role/singger.png',
							'roleName':'作曲者',
							'isSelected':false
						},
						{
							'roleImage':'../../../../static/role/teacher.png',
							'roleName':'老师',
							'isSelected':false
						},
						{
							'roleImage':'../../../../static/role/yundongjia.png',
							'roleName':'运动家',
							'isSelected':false
						},
						{
							'roleImage':'../../../../static/role/zuoye.png',
							'roleName':'作业助手',
							'isSelected':false
						},
					]
				}
			},
			onLoad() {

			},
			methods: {
				selected(index) {
					//取消已经选择的
					this.roleData[this.selectedRoleIndex].isSelected = false;
					//设置选择的
					this.roleData[index].isSelected = true;
					//记录新选择的
					this.selectedRoleIndex=index;
				}
			}
		}
</script>

<style>
	.badge-box{
		position: absolute;
		top: 0px;
		right: 0px; 
		z-index: 999;
	}
.uni-box-head{
	  display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 15px 0px;
		background-color: #FFFFFF;
}
.role-model{
	    display: flex;
	    flex-direction: row;
	    justify-content: center;
	    flex-wrap: wrap;
	    align-items: center;
}
.role-model .role{
	width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 7px 15px;
    background-color: #f4faf8;
    padding: 10px;
    border-radius: 5px;
    position: relative;
}
.role-model .role .image{
	margin-top: 7px;
}
.role-model .role .name{
	text-align: center;
	margin-top: 7px;
	font-weight: 700;
}
</style>
