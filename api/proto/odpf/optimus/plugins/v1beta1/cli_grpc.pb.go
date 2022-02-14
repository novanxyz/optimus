// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package optimus

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// CLIModServiceClient is the client API for CLIModService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type CLIModServiceClient interface {
	// GetQuestions list down all the cli inputs required to generate spec files
	// name used for question will be directly mapped to DefaultConfig() parameters
	GetQuestions(ctx context.Context, in *GetQuestionsRequest, opts ...grpc.CallOption) (*GetQuestionsResponse, error)
	ValidateQuestion(ctx context.Context, in *ValidateQuestionRequest, opts ...grpc.CallOption) (*ValidateQuestionResponse, error)
	// DefaultConfig are a set of configuration which will be embedded in job
	// specification. These configs can be requested by the docker container before
	// execution
	// It will be generated based on results of GetQuestions from user, it also inherit
	// its parent config if any
	// if DryRun is true in PluginOptions, should not throw error for missing inputs
	DefaultConfig(ctx context.Context, in *DefaultConfigRequest, opts ...grpc.CallOption) (*DefaultConfigResponse, error)
	// DefaultAssets are a set of files which will be embedded in job
	// specification in assets folder. These configs can be requested by the
	// docker container before execution.
	// if DryRun is true in PluginOptions, should not throw error for missing inputs
	DefaultAssets(ctx context.Context, in *DefaultAssetsRequest, opts ...grpc.CallOption) (*DefaultAssetsResponse, error)
	// CompileAssets overrides the default asset compilation behaviour
	CompileAssets(ctx context.Context, in *CompileAssetsRequest, opts ...grpc.CallOption) (*CompileAssetsResponse, error)
}

type cLIModServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewCLIModServiceClient(cc grpc.ClientConnInterface) CLIModServiceClient {
	return &cLIModServiceClient{cc}
}

func (c *cLIModServiceClient) GetQuestions(ctx context.Context, in *GetQuestionsRequest, opts ...grpc.CallOption) (*GetQuestionsResponse, error) {
	out := new(GetQuestionsResponse)
	err := c.cc.Invoke(ctx, "/odpf.optimus.plugins.v1beta1.CLIModService/GetQuestions", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cLIModServiceClient) ValidateQuestion(ctx context.Context, in *ValidateQuestionRequest, opts ...grpc.CallOption) (*ValidateQuestionResponse, error) {
	out := new(ValidateQuestionResponse)
	err := c.cc.Invoke(ctx, "/odpf.optimus.plugins.v1beta1.CLIModService/ValidateQuestion", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cLIModServiceClient) DefaultConfig(ctx context.Context, in *DefaultConfigRequest, opts ...grpc.CallOption) (*DefaultConfigResponse, error) {
	out := new(DefaultConfigResponse)
	err := c.cc.Invoke(ctx, "/odpf.optimus.plugins.v1beta1.CLIModService/DefaultConfig", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cLIModServiceClient) DefaultAssets(ctx context.Context, in *DefaultAssetsRequest, opts ...grpc.CallOption) (*DefaultAssetsResponse, error) {
	out := new(DefaultAssetsResponse)
	err := c.cc.Invoke(ctx, "/odpf.optimus.plugins.v1beta1.CLIModService/DefaultAssets", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cLIModServiceClient) CompileAssets(ctx context.Context, in *CompileAssetsRequest, opts ...grpc.CallOption) (*CompileAssetsResponse, error) {
	out := new(CompileAssetsResponse)
	err := c.cc.Invoke(ctx, "/odpf.optimus.plugins.v1beta1.CLIModService/CompileAssets", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CLIModServiceServer is the server API for CLIModService service.
// All implementations must embed UnimplementedCLIModServiceServer
// for forward compatibility
type CLIModServiceServer interface {
	// GetQuestions list down all the cli inputs required to generate spec files
	// name used for question will be directly mapped to DefaultConfig() parameters
	GetQuestions(context.Context, *GetQuestionsRequest) (*GetQuestionsResponse, error)
	ValidateQuestion(context.Context, *ValidateQuestionRequest) (*ValidateQuestionResponse, error)
	// DefaultConfig are a set of configuration which will be embedded in job
	// specification. These configs can be requested by the docker container before
	// execution
	// It will be generated based on results of GetQuestions from user, it also inherit
	// its parent config if any
	// if DryRun is true in PluginOptions, should not throw error for missing inputs
	DefaultConfig(context.Context, *DefaultConfigRequest) (*DefaultConfigResponse, error)
	// DefaultAssets are a set of files which will be embedded in job
	// specification in assets folder. These configs can be requested by the
	// docker container before execution.
	// if DryRun is true in PluginOptions, should not throw error for missing inputs
	DefaultAssets(context.Context, *DefaultAssetsRequest) (*DefaultAssetsResponse, error)
	// CompileAssets overrides the default asset compilation behaviour
	CompileAssets(context.Context, *CompileAssetsRequest) (*CompileAssetsResponse, error)
	mustEmbedUnimplementedCLIModServiceServer()
}

// UnimplementedCLIModServiceServer must be embedded to have forward compatible implementations.
type UnimplementedCLIModServiceServer struct {
}

func (UnimplementedCLIModServiceServer) GetQuestions(context.Context, *GetQuestionsRequest) (*GetQuestionsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetQuestions not implemented")
}
func (UnimplementedCLIModServiceServer) ValidateQuestion(context.Context, *ValidateQuestionRequest) (*ValidateQuestionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ValidateQuestion not implemented")
}
func (UnimplementedCLIModServiceServer) DefaultConfig(context.Context, *DefaultConfigRequest) (*DefaultConfigResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DefaultConfig not implemented")
}
func (UnimplementedCLIModServiceServer) DefaultAssets(context.Context, *DefaultAssetsRequest) (*DefaultAssetsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DefaultAssets not implemented")
}
func (UnimplementedCLIModServiceServer) CompileAssets(context.Context, *CompileAssetsRequest) (*CompileAssetsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CompileAssets not implemented")
}
func (UnimplementedCLIModServiceServer) mustEmbedUnimplementedCLIModServiceServer() {}

// UnsafeCLIModServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to CLIModServiceServer will
// result in compilation errors.
type UnsafeCLIModServiceServer interface {
	mustEmbedUnimplementedCLIModServiceServer()
}

func RegisterCLIModServiceServer(s grpc.ServiceRegistrar, srv CLIModServiceServer) {
	s.RegisterService(&CLIModService_ServiceDesc, srv)
}

func _CLIModService_GetQuestions_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetQuestionsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CLIModServiceServer).GetQuestions(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/odpf.optimus.plugins.v1beta1.CLIModService/GetQuestions",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CLIModServiceServer).GetQuestions(ctx, req.(*GetQuestionsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CLIModService_ValidateQuestion_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ValidateQuestionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CLIModServiceServer).ValidateQuestion(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/odpf.optimus.plugins.v1beta1.CLIModService/ValidateQuestion",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CLIModServiceServer).ValidateQuestion(ctx, req.(*ValidateQuestionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CLIModService_DefaultConfig_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DefaultConfigRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CLIModServiceServer).DefaultConfig(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/odpf.optimus.plugins.v1beta1.CLIModService/DefaultConfig",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CLIModServiceServer).DefaultConfig(ctx, req.(*DefaultConfigRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CLIModService_DefaultAssets_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DefaultAssetsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CLIModServiceServer).DefaultAssets(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/odpf.optimus.plugins.v1beta1.CLIModService/DefaultAssets",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CLIModServiceServer).DefaultAssets(ctx, req.(*DefaultAssetsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CLIModService_CompileAssets_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CompileAssetsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CLIModServiceServer).CompileAssets(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/odpf.optimus.plugins.v1beta1.CLIModService/CompileAssets",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CLIModServiceServer).CompileAssets(ctx, req.(*CompileAssetsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// CLIModService_ServiceDesc is the grpc.ServiceDesc for CLIModService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var CLIModService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "odpf.optimus.plugins.v1beta1.CLIModService",
	HandlerType: (*CLIModServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetQuestions",
			Handler:    _CLIModService_GetQuestions_Handler,
		},
		{
			MethodName: "ValidateQuestion",
			Handler:    _CLIModService_ValidateQuestion_Handler,
		},
		{
			MethodName: "DefaultConfig",
			Handler:    _CLIModService_DefaultConfig_Handler,
		},
		{
			MethodName: "DefaultAssets",
			Handler:    _CLIModService_DefaultAssets_Handler,
		},
		{
			MethodName: "CompileAssets",
			Handler:    _CLIModService_CompileAssets_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "odpf/optimus/plugins/v1beta1/cli.proto",
}