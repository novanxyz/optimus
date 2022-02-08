// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: odpf/optimus/plugins/v1beta1/base.proto

package optimus

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// PluginType enumerates the type of plugins Optimus supports
type PluginType int32

const (
	PluginType_PLUGIN_TYPE_UNSPECIFIED PluginType = 0
	PluginType_PLUGIN_TYPE_TASK        PluginType = 1
	PluginType_PLUGIN_TYPE_HOOK        PluginType = 2
)

// Enum value maps for PluginType.
var (
	PluginType_name = map[int32]string{
		0: "PLUGIN_TYPE_UNSPECIFIED",
		1: "PLUGIN_TYPE_TASK",
		2: "PLUGIN_TYPE_HOOK",
	}
	PluginType_value = map[string]int32{
		"PLUGIN_TYPE_UNSPECIFIED": 0,
		"PLUGIN_TYPE_TASK":        1,
		"PLUGIN_TYPE_HOOK":        2,
	}
)

func (x PluginType) Enum() *PluginType {
	p := new(PluginType)
	*p = x
	return p
}

func (x PluginType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (PluginType) Descriptor() protoreflect.EnumDescriptor {
	return file_odpf_optimus_plugins_v1beta1_base_proto_enumTypes[0].Descriptor()
}

func (PluginType) Type() protoreflect.EnumType {
	return &file_odpf_optimus_plugins_v1beta1_base_proto_enumTypes[0]
}

func (x PluginType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use PluginType.Descriptor instead.
func (PluginType) EnumDescriptor() ([]byte, []int) {
	return file_odpf_optimus_plugins_v1beta1_base_proto_rawDescGZIP(), []int{0}
}

// PluginMod enumerates the type of mods this plugin supports
type PluginMod int32

const (
	PluginMod_PLUGIN_MOD_UNSPECIFIED        PluginMod = 0
	PluginMod_PLUGIN_MOD_CLI                PluginMod = 1
	PluginMod_PLUGIN_MOD_DEPENDENCYRESOLVER PluginMod = 2
)

// Enum value maps for PluginMod.
var (
	PluginMod_name = map[int32]string{
		0: "PLUGIN_MOD_UNSPECIFIED",
		1: "PLUGIN_MOD_CLI",
		2: "PLUGIN_MOD_DEPENDENCYRESOLVER",
	}
	PluginMod_value = map[string]int32{
		"PLUGIN_MOD_UNSPECIFIED":        0,
		"PLUGIN_MOD_CLI":                1,
		"PLUGIN_MOD_DEPENDENCYRESOLVER": 2,
	}
)

func (x PluginMod) Enum() *PluginMod {
	p := new(PluginMod)
	*p = x
	return p
}

func (x PluginMod) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (PluginMod) Descriptor() protoreflect.EnumDescriptor {
	return file_odpf_optimus_plugins_v1beta1_base_proto_enumTypes[1].Descriptor()
}

func (PluginMod) Type() protoreflect.EnumType {
	return &file_odpf_optimus_plugins_v1beta1_base_proto_enumTypes[1]
}

func (x PluginMod) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use PluginMod.Descriptor instead.
func (PluginMod) EnumDescriptor() ([]byte, []int) {
	return file_odpf_optimus_plugins_v1beta1_base_proto_rawDescGZIP(), []int{1}
}

// HookType enumerates the type of hook Optimus supports
type HookType int32

const (
	HookType_HOOK_TYPE_UNSPECIFIED HookType = 0
	HookType_HOOK_TYPE_PRE         HookType = 1
	HookType_HOOK_TYPE_POST        HookType = 2
	HookType_HOOK_TYPE_FAIL        HookType = 3
)

// Enum value maps for HookType.
var (
	HookType_name = map[int32]string{
		0: "HOOK_TYPE_UNSPECIFIED",
		1: "HOOK_TYPE_PRE",
		2: "HOOK_TYPE_POST",
		3: "HOOK_TYPE_FAIL",
	}
	HookType_value = map[string]int32{
		"HOOK_TYPE_UNSPECIFIED": 0,
		"HOOK_TYPE_PRE":         1,
		"HOOK_TYPE_POST":        2,
		"HOOK_TYPE_FAIL":        3,
	}
)

func (x HookType) Enum() *HookType {
	p := new(HookType)
	*p = x
	return p
}

func (x HookType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (HookType) Descriptor() protoreflect.EnumDescriptor {
	return file_odpf_optimus_plugins_v1beta1_base_proto_enumTypes[2].Descriptor()
}

func (HookType) Type() protoreflect.EnumType {
	return &file_odpf_optimus_plugins_v1beta1_base_proto_enumTypes[2]
}

func (x HookType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use HookType.Descriptor instead.
func (HookType) EnumDescriptor() ([]byte, []int) {
	return file_odpf_optimus_plugins_v1beta1_base_proto_rawDescGZIP(), []int{2}
}

type PluginInfoRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *PluginInfoRequest) Reset() {
	*x = PluginInfoRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_odpf_optimus_plugins_v1beta1_base_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PluginInfoRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PluginInfoRequest) ProtoMessage() {}

func (x *PluginInfoRequest) ProtoReflect() protoreflect.Message {
	mi := &file_odpf_optimus_plugins_v1beta1_base_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PluginInfoRequest.ProtoReflect.Descriptor instead.
func (*PluginInfoRequest) Descriptor() ([]byte, []int) {
	return file_odpf_optimus_plugins_v1beta1_base_proto_rawDescGZIP(), []int{0}
}

type PluginInfoResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name        string      `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Description string      `protobuf:"bytes,2,opt,name=description,proto3" json:"description,omitempty"`
	PluginType  PluginType  `protobuf:"varint,3,opt,name=plugin_type,json=pluginType,proto3,enum=odpf.optimus.plugins.v1beta1.PluginType" json:"plugin_type,omitempty"`
	PluginMods  []PluginMod `protobuf:"varint,4,rep,packed,name=plugin_mods,json=pluginMods,proto3,enum=odpf.optimus.plugins.v1beta1.PluginMod" json:"plugin_mods,omitempty"`
	// plugin_version is the semver version of this individual plugin
	PluginVersion string `protobuf:"bytes,5,opt,name=plugin_version,json=pluginVersion,proto3" json:"plugin_version,omitempty"`
	// api_versions indicates the versions of the Optimus Plugin API
	// this plugin supports
	ApiVersion []string `protobuf:"bytes,6,rep,name=api_version,json=apiVersion,proto3" json:"api_version,omitempty"`
	// docker image including version if this executes a docker image
	Image string `protobuf:"bytes,10,opt,name=image,proto3" json:"image,omitempty"`
	// HOOK specific
	// name of hooks on which this should depend on before executing
	DependsOn []string `protobuf:"bytes,20,rep,name=depends_on,json=dependsOn,proto3" json:"depends_on,omitempty"`
	HookType  HookType `protobuf:"varint,21,opt,name=hook_type,json=hookType,proto3,enum=odpf.optimus.plugins.v1beta1.HookType" json:"hook_type,omitempty"`
	// Experimental
	// will be mounted inside the container as volume
	SecretPath string `protobuf:"bytes,30,opt,name=secret_path,json=secretPath,proto3" json:"secret_path,omitempty"`
}

func (x *PluginInfoResponse) Reset() {
	*x = PluginInfoResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_odpf_optimus_plugins_v1beta1_base_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PluginInfoResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PluginInfoResponse) ProtoMessage() {}

func (x *PluginInfoResponse) ProtoReflect() protoreflect.Message {
	mi := &file_odpf_optimus_plugins_v1beta1_base_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PluginInfoResponse.ProtoReflect.Descriptor instead.
func (*PluginInfoResponse) Descriptor() ([]byte, []int) {
	return file_odpf_optimus_plugins_v1beta1_base_proto_rawDescGZIP(), []int{1}
}

func (x *PluginInfoResponse) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *PluginInfoResponse) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *PluginInfoResponse) GetPluginType() PluginType {
	if x != nil {
		return x.PluginType
	}
	return PluginType_PLUGIN_TYPE_UNSPECIFIED
}

func (x *PluginInfoResponse) GetPluginMods() []PluginMod {
	if x != nil {
		return x.PluginMods
	}
	return nil
}

func (x *PluginInfoResponse) GetPluginVersion() string {
	if x != nil {
		return x.PluginVersion
	}
	return ""
}

func (x *PluginInfoResponse) GetApiVersion() []string {
	if x != nil {
		return x.ApiVersion
	}
	return nil
}

func (x *PluginInfoResponse) GetImage() string {
	if x != nil {
		return x.Image
	}
	return ""
}

func (x *PluginInfoResponse) GetDependsOn() []string {
	if x != nil {
		return x.DependsOn
	}
	return nil
}

func (x *PluginInfoResponse) GetHookType() HookType {
	if x != nil {
		return x.HookType
	}
	return HookType_HOOK_TYPE_UNSPECIFIED
}

func (x *PluginInfoResponse) GetSecretPath() string {
	if x != nil {
		return x.SecretPath
	}
	return ""
}

type PluginOptions struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	DryRun bool `protobuf:"varint,1,opt,name=dry_run,json=dryRun,proto3" json:"dry_run,omitempty"`
}

func (x *PluginOptions) Reset() {
	*x = PluginOptions{}
	if protoimpl.UnsafeEnabled {
		mi := &file_odpf_optimus_plugins_v1beta1_base_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PluginOptions) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PluginOptions) ProtoMessage() {}

func (x *PluginOptions) ProtoReflect() protoreflect.Message {
	mi := &file_odpf_optimus_plugins_v1beta1_base_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PluginOptions.ProtoReflect.Descriptor instead.
func (*PluginOptions) Descriptor() ([]byte, []int) {
	return file_odpf_optimus_plugins_v1beta1_base_proto_rawDescGZIP(), []int{2}
}

func (x *PluginOptions) GetDryRun() bool {
	if x != nil {
		return x.DryRun
	}
	return false
}

var File_odpf_optimus_plugins_v1beta1_base_proto protoreflect.FileDescriptor

var file_odpf_optimus_plugins_v1beta1_base_proto_rawDesc = []byte{
	0x0a, 0x27, 0x6f, 0x64, 0x70, 0x66, 0x2f, 0x6f, 0x70, 0x74, 0x69, 0x6d, 0x75, 0x73, 0x2f, 0x70,
	0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x2f, 0x76, 0x31, 0x62, 0x65, 0x74, 0x61, 0x31, 0x2f, 0x62,
	0x61, 0x73, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1c, 0x6f, 0x64, 0x70, 0x66, 0x2e,
	0x6f, 0x70, 0x74, 0x69, 0x6d, 0x75, 0x73, 0x2e, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x2e,
	0x76, 0x31, 0x62, 0x65, 0x74, 0x61, 0x31, 0x22, 0x13, 0x0a, 0x11, 0x50, 0x6c, 0x75, 0x67, 0x69,
	0x6e, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22, 0xc2, 0x03, 0x0a,
	0x12, 0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72,
	0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65,
	0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x49, 0x0a, 0x0b, 0x70, 0x6c, 0x75,
	0x67, 0x69, 0x6e, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x28,
	0x2e, 0x6f, 0x64, 0x70, 0x66, 0x2e, 0x6f, 0x70, 0x74, 0x69, 0x6d, 0x75, 0x73, 0x2e, 0x70, 0x6c,
	0x75, 0x67, 0x69, 0x6e, 0x73, 0x2e, 0x76, 0x31, 0x62, 0x65, 0x74, 0x61, 0x31, 0x2e, 0x50, 0x6c,
	0x75, 0x67, 0x69, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x52, 0x0a, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e,
	0x54, 0x79, 0x70, 0x65, 0x12, 0x48, 0x0a, 0x0b, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x5f, 0x6d,
	0x6f, 0x64, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0e, 0x32, 0x27, 0x2e, 0x6f, 0x64, 0x70, 0x66,
	0x2e, 0x6f, 0x70, 0x74, 0x69, 0x6d, 0x75, 0x73, 0x2e, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73,
	0x2e, 0x76, 0x31, 0x62, 0x65, 0x74, 0x61, 0x31, 0x2e, 0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x4d,
	0x6f, 0x64, 0x52, 0x0a, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x4d, 0x6f, 0x64, 0x73, 0x12, 0x25,
	0x0a, 0x0e, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x5f, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x56, 0x65,
	0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x1f, 0x0a, 0x0b, 0x61, 0x70, 0x69, 0x5f, 0x76, 0x65, 0x72,
	0x73, 0x69, 0x6f, 0x6e, 0x18, 0x06, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0a, 0x61, 0x70, 0x69, 0x56,
	0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x14, 0x0a, 0x05, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x18,
	0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x12, 0x1d, 0x0a, 0x0a,
	0x64, 0x65, 0x70, 0x65, 0x6e, 0x64, 0x73, 0x5f, 0x6f, 0x6e, 0x18, 0x14, 0x20, 0x03, 0x28, 0x09,
	0x52, 0x09, 0x64, 0x65, 0x70, 0x65, 0x6e, 0x64, 0x73, 0x4f, 0x6e, 0x12, 0x43, 0x0a, 0x09, 0x68,
	0x6f, 0x6f, 0x6b, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x15, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x26,
	0x2e, 0x6f, 0x64, 0x70, 0x66, 0x2e, 0x6f, 0x70, 0x74, 0x69, 0x6d, 0x75, 0x73, 0x2e, 0x70, 0x6c,
	0x75, 0x67, 0x69, 0x6e, 0x73, 0x2e, 0x76, 0x31, 0x62, 0x65, 0x74, 0x61, 0x31, 0x2e, 0x48, 0x6f,
	0x6f, 0x6b, 0x54, 0x79, 0x70, 0x65, 0x52, 0x08, 0x68, 0x6f, 0x6f, 0x6b, 0x54, 0x79, 0x70, 0x65,
	0x12, 0x1f, 0x0a, 0x0b, 0x73, 0x65, 0x63, 0x72, 0x65, 0x74, 0x5f, 0x70, 0x61, 0x74, 0x68, 0x18,
	0x1e, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x73, 0x65, 0x63, 0x72, 0x65, 0x74, 0x50, 0x61, 0x74,
	0x68, 0x22, 0x28, 0x0a, 0x0d, 0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x4f, 0x70, 0x74, 0x69, 0x6f,
	0x6e, 0x73, 0x12, 0x17, 0x0a, 0x07, 0x64, 0x72, 0x79, 0x5f, 0x72, 0x75, 0x6e, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x08, 0x52, 0x06, 0x64, 0x72, 0x79, 0x52, 0x75, 0x6e, 0x2a, 0x55, 0x0a, 0x0a, 0x50,
	0x6c, 0x75, 0x67, 0x69, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x12, 0x1b, 0x0a, 0x17, 0x50, 0x4c, 0x55,
	0x47, 0x49, 0x4e, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49,
	0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x14, 0x0a, 0x10, 0x50, 0x4c, 0x55, 0x47, 0x49, 0x4e,
	0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x54, 0x41, 0x53, 0x4b, 0x10, 0x01, 0x12, 0x14, 0x0a, 0x10,
	0x50, 0x4c, 0x55, 0x47, 0x49, 0x4e, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x48, 0x4f, 0x4f, 0x4b,
	0x10, 0x02, 0x2a, 0x5e, 0x0a, 0x09, 0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x4d, 0x6f, 0x64, 0x12,
	0x1a, 0x0a, 0x16, 0x50, 0x4c, 0x55, 0x47, 0x49, 0x4e, 0x5f, 0x4d, 0x4f, 0x44, 0x5f, 0x55, 0x4e,
	0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x12, 0x0a, 0x0e, 0x50,
	0x4c, 0x55, 0x47, 0x49, 0x4e, 0x5f, 0x4d, 0x4f, 0x44, 0x5f, 0x43, 0x4c, 0x49, 0x10, 0x01, 0x12,
	0x21, 0x0a, 0x1d, 0x50, 0x4c, 0x55, 0x47, 0x49, 0x4e, 0x5f, 0x4d, 0x4f, 0x44, 0x5f, 0x44, 0x45,
	0x50, 0x45, 0x4e, 0x44, 0x45, 0x4e, 0x43, 0x59, 0x52, 0x45, 0x53, 0x4f, 0x4c, 0x56, 0x45, 0x52,
	0x10, 0x02, 0x2a, 0x60, 0x0a, 0x08, 0x48, 0x6f, 0x6f, 0x6b, 0x54, 0x79, 0x70, 0x65, 0x12, 0x19,
	0x0a, 0x15, 0x48, 0x4f, 0x4f, 0x4b, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50,
	0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x11, 0x0a, 0x0d, 0x48, 0x4f, 0x4f,
	0x4b, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x50, 0x52, 0x45, 0x10, 0x01, 0x12, 0x12, 0x0a, 0x0e,
	0x48, 0x4f, 0x4f, 0x4b, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x50, 0x4f, 0x53, 0x54, 0x10, 0x02,
	0x12, 0x12, 0x0a, 0x0e, 0x48, 0x4f, 0x4f, 0x4b, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x46, 0x41,
	0x49, 0x4c, 0x10, 0x03, 0x32, 0x7e, 0x0a, 0x0b, 0x42, 0x61, 0x73, 0x65, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x12, 0x6f, 0x0a, 0x0a, 0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x49, 0x6e, 0x66,
	0x6f, 0x12, 0x2f, 0x2e, 0x6f, 0x64, 0x70, 0x66, 0x2e, 0x6f, 0x70, 0x74, 0x69, 0x6d, 0x75, 0x73,
	0x2e, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x2e, 0x76, 0x31, 0x62, 0x65, 0x74, 0x61, 0x31,
	0x2e, 0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x30, 0x2e, 0x6f, 0x64, 0x70, 0x66, 0x2e, 0x6f, 0x70, 0x74, 0x69, 0x6d, 0x75,
	0x73, 0x2e, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x2e, 0x76, 0x31, 0x62, 0x65, 0x74, 0x61,
	0x31, 0x2e, 0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x42, 0x53, 0x0a, 0x1e, 0x69, 0x6f, 0x2e, 0x6f, 0x64, 0x70, 0x66, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x6e, 0x2e, 0x6f, 0x70, 0x74, 0x69, 0x6d, 0x75, 0x73, 0x2e, 0x70,
	0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x42, 0x0f, 0x42, 0x61, 0x73, 0x65, 0x50, 0x6c, 0x75, 0x67,
	0x69, 0x6e, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x1e, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6f, 0x64, 0x70, 0x66, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x6e, 0x2f, 0x6f, 0x70, 0x74, 0x69, 0x6d, 0x75, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_odpf_optimus_plugins_v1beta1_base_proto_rawDescOnce sync.Once
	file_odpf_optimus_plugins_v1beta1_base_proto_rawDescData = file_odpf_optimus_plugins_v1beta1_base_proto_rawDesc
)

func file_odpf_optimus_plugins_v1beta1_base_proto_rawDescGZIP() []byte {
	file_odpf_optimus_plugins_v1beta1_base_proto_rawDescOnce.Do(func() {
		file_odpf_optimus_plugins_v1beta1_base_proto_rawDescData = protoimpl.X.CompressGZIP(file_odpf_optimus_plugins_v1beta1_base_proto_rawDescData)
	})
	return file_odpf_optimus_plugins_v1beta1_base_proto_rawDescData
}

var file_odpf_optimus_plugins_v1beta1_base_proto_enumTypes = make([]protoimpl.EnumInfo, 3)
var file_odpf_optimus_plugins_v1beta1_base_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_odpf_optimus_plugins_v1beta1_base_proto_goTypes = []interface{}{
	(PluginType)(0),            // 0: odpf.optimus.plugins.v1beta1.PluginType
	(PluginMod)(0),             // 1: odpf.optimus.plugins.v1beta1.PluginMod
	(HookType)(0),              // 2: odpf.optimus.plugins.v1beta1.HookType
	(*PluginInfoRequest)(nil),  // 3: odpf.optimus.plugins.v1beta1.PluginInfoRequest
	(*PluginInfoResponse)(nil), // 4: odpf.optimus.plugins.v1beta1.PluginInfoResponse
	(*PluginOptions)(nil),      // 5: odpf.optimus.plugins.v1beta1.PluginOptions
}
var file_odpf_optimus_plugins_v1beta1_base_proto_depIdxs = []int32{
	0, // 0: odpf.optimus.plugins.v1beta1.PluginInfoResponse.plugin_type:type_name -> odpf.optimus.plugins.v1beta1.PluginType
	1, // 1: odpf.optimus.plugins.v1beta1.PluginInfoResponse.plugin_mods:type_name -> odpf.optimus.plugins.v1beta1.PluginMod
	2, // 2: odpf.optimus.plugins.v1beta1.PluginInfoResponse.hook_type:type_name -> odpf.optimus.plugins.v1beta1.HookType
	3, // 3: odpf.optimus.plugins.v1beta1.BaseService.PluginInfo:input_type -> odpf.optimus.plugins.v1beta1.PluginInfoRequest
	4, // 4: odpf.optimus.plugins.v1beta1.BaseService.PluginInfo:output_type -> odpf.optimus.plugins.v1beta1.PluginInfoResponse
	4, // [4:5] is the sub-list for method output_type
	3, // [3:4] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_odpf_optimus_plugins_v1beta1_base_proto_init() }
func file_odpf_optimus_plugins_v1beta1_base_proto_init() {
	if File_odpf_optimus_plugins_v1beta1_base_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_odpf_optimus_plugins_v1beta1_base_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PluginInfoRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_odpf_optimus_plugins_v1beta1_base_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PluginInfoResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_odpf_optimus_plugins_v1beta1_base_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PluginOptions); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_odpf_optimus_plugins_v1beta1_base_proto_rawDesc,
			NumEnums:      3,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_odpf_optimus_plugins_v1beta1_base_proto_goTypes,
		DependencyIndexes: file_odpf_optimus_plugins_v1beta1_base_proto_depIdxs,
		EnumInfos:         file_odpf_optimus_plugins_v1beta1_base_proto_enumTypes,
		MessageInfos:      file_odpf_optimus_plugins_v1beta1_base_proto_msgTypes,
	}.Build()
	File_odpf_optimus_plugins_v1beta1_base_proto = out.File
	file_odpf_optimus_plugins_v1beta1_base_proto_rawDesc = nil
	file_odpf_optimus_plugins_v1beta1_base_proto_goTypes = nil
	file_odpf_optimus_plugins_v1beta1_base_proto_depIdxs = nil
}