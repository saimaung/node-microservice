build:
	@echo "------------- Building Docker Image ---------------"
	docker build -t saiwaimaung/restify -f Dockerfile .

push:
	@echo "--------- Logging Into DockerHub -----------"
	docker login
	@echo "-------- Pushing Image To DockerHub ---------"
	docker push saiwaimaung/restify

kube-pf:
	@echo "---------- Forwarding k8s restify port to local -----------"
	kubectl port-forward restify-full-stack 3030:3030