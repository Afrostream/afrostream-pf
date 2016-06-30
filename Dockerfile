FROM alpine:latest
ADD dist/afrostream-pf /opt/bin/afrostream-pf
CMD ["/opt/bin/afrostream-pf"]
