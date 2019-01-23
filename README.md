第一种方法

lerna publish --skip-git  先发布子包  此时代码的version 都没有变
lerna version --no-git-tag-version --no-push  再改变版本
也可以给cli安装子包  
测试没有问题 
统一提交版本修改并打tag

第二种方法
lerna publish --no-git-tag-version --no-push  子包发布成功   没有提交 版本号也改了  显示lerna命令失败

