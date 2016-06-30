# Description

REST api superset of Afrostream PF (video platform)

# Install

# Details

# Golang Install on ubuntu

install go
```
sudo add-apt-repository ppa:ubuntu-lxc/lxd-stable
sudo apt-get update
sudo apt-get install golang
```

install dependency management tool
```
go get github.com/tools/godep
```

setup .bashrc env vars

```
export GOPATH=$HOME/go
export PATH=$PATH:$GOROOT/bin:$GOPATH/bin
source ~/.bashrc
```

# Download the source code

```
# create your directory
mkdir -p $GOPATH/src/github.com/afrostream
cd  $GOPATH/src/github.com/afrostream
git clone git@github.com:Afrostream/afrostream-pf.git
# your source code is now in
cd $GOPATH/src/github.com/afrostream/afrostream-pf
```

# Build

```
make
```
