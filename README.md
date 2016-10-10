# What this is
This is an example of code that can be run by a job scheduler on a periodic basis (like a cron job). It's used as part of the Building Services at Scale course.

# How to run the project
First build the docker image by running the following command:
```
docker build -t your-docker-hub-account-name/mesos-tutorial-jobs-example .
```
Then create a free request bin over at: <https://requestb.in/> (or equivalent service)

Then run the job service:
```
docker run -e POSTURL=https://requestb.in/TheUrlYouGotFromRequestBin -it your-docker-hub-account-name/mesos-tutorial-jobs-example
```