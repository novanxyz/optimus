package models

import (
	"github.com/google/uuid"
	"time"
)

type BackupResourceRequest struct {
	Resource   ResourceSpec
	BackupSpec BackupRequest
}

type BackupResourceResponse struct {
	ResultURN  string
	ResultSpec interface{}
}

type BackupRequest struct {
	ID               uuid.UUID
	ResourceName     string
	Project          ProjectSpec
	Namespace        NamespaceSpec
	Datastore        string
	Description      string
	IgnoreDownstream bool
	Config           DestinationConfig
	DryRun           bool
	BackupTime       time.Time
}

type BackupResult struct {
	URN  string
	Spec interface{}
}

type BackupResponse struct {
	ResourceURN string
	Result      BackupResult
}

type DestinationConfig struct {
	TTLInDays   int
	Dataset     string
	TablePrefix string
}

type BackupSpec struct {
	ID          uuid.UUID
	Resource    ResourceSpec
	Result      map[string]interface{}
	Description string
	Config      DestinationConfig
}
