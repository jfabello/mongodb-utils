const queueJSONSchema = {
	$jsonSchema: {
		bsonType: "object",
		properties: {
			id: {
				bsonType: "string",
				description: "The globally unique identifier for the object."
			},
			name: {
				bsonType: "string"
			},
			division: {
				bsonType: "object",
				properties: {
					id: {
						bsonType: "string",
						description: "The globally unique identifier for the object."
					},
					name: {
						bsonType: "string"
					},
					selfUri: {
						bsonType: "string",
						description: "The URI for this object"
					}
				}
			},
			description: {
				bsonType: "string",
				description: "The queue description."
			},
			dateCreated: {
				bsonType: "date",
				description: "The date the queue was created. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z"
			},
			dateModified: {
				bsonType: "date",
				description: "The date of the last modification to the queue. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z"
			},
			modifiedBy: {
				bsonType: "string",
				description: "The ID of the user that last modified the queue."
			},
			createdBy: {
				bsonType: "string",
				description: "The ID of the user that created the queue."
			},
			memberCount: {
				bsonType: "int",
				description: "The total number of members in the queue."
			},
			userMemberCount: {
				bsonType: "int",
				description: "The number of user members (i.e., non-group members) in the queue."
			},
			joinedMemberCount: {
				bsonType: "int",
				description: "The number of joined members in the queue."
			},
			mediaSettings: {
				bsonType: "object",
				properties: {
					call: {
						bsonType: "object",
						properties: {
							enableAutoAnswer: {
								bsonType: "bool",
								description: "Indicates if auto-answer is enabled for the given media type or subtype (default is false).  Subtype settings take precedence over media type settings."
							},
							alertingTimeoutSeconds: {
								bsonType: "int",
								description: "The alerting timeout for the media type, in seconds"
							},
							serviceLevel: {
								bsonType: "object",
								properties: {
									percentage: {
										bsonType: "double",
										description: "The desired Service Level. A value between 0 and 1."
									},
									durationMs: {
										bsonType: "long",
										description: "Service Level target in milliseconds."
									}
								}
							},
							autoAnswerAlertToneSeconds: {
								bsonType: "double",
								description: "How long to play the alerting tone for an auto-answer interaction"
							},
							manualAnswerAlertToneSeconds: {
								bsonType: "double",
								description: "How long to play the alerting tone for a manual-answer interaction"
							},
							subTypeSettings: {
								bsonType: "object",
								description: "Map of media subtype to media subtype specific settings.",
								additionalProperties: {
									bsonType: "object",
									properties: {
										enableAutoAnswer: {
											bsonType: "bool",
											description: "Indicates if auto-answer is enabled for the given media type or subtype (default is false).  Subtype settings take precedence over media type settings."
										}
									}
								}
							}
						}
					},
					callback: {
						bsonType: "object",
						properties: {
							enableAutoAnswer: {
								bsonType: "bool",
								description: "Indicates if auto-answer is enabled for the given media type or subtype (default is false).  Subtype settings take precedence over media type settings."
							},
							alertingTimeoutSeconds: {
								bsonType: "int",
								description: "The alerting timeout for the media type, in seconds"
							},
							serviceLevel: {
								bsonType: "object",
								properties: {
									percentage: {
										bsonType: "double",
										description: "The desired Service Level. A value between 0 and 1."
									},
									durationMs: {
										bsonType: "long",
										description: "Service Level target in milliseconds."
									}
								}
							},
							autoAnswerAlertToneSeconds: {
								bsonType: "double",
								description: "How long to play the alerting tone for an auto-answer interaction"
							},
							manualAnswerAlertToneSeconds: {
								bsonType: "double",
								description: "How long to play the alerting tone for a manual-answer interaction"
							},
							subTypeSettings: {
								bsonType: "object",
								description: "Map of media subtype to media subtype specific settings.",
								additionalProperties: {
									bsonType: "object",
									properties: {
										enableAutoAnswer: {
											bsonType: "bool",
											description: "Indicates if auto-answer is enabled for the given media type or subtype (default is false).  Subtype settings take precedence over media type settings."
										}
									}
								}
							},
							enableAutoDialAndEnd: {
								bsonType: "bool",
								description: "Flag to enable Auto-Dial and Auto-End automation for callbacks on this queue."
							},
							autoDialDelaySeconds: {
								bsonType: "int",
								description: "Time in seconds after agent connects to callback before outgoing call is auto-dialed. Allowable values in range 0 - 1200 seconds. Defaults to 300 seconds."
							},
							autoEndDelaySeconds: {
								bsonType: "int",
								description: "Time in seconds after agent disconnects from the outgoing call before the encasing callback is auto-ended. Allowable values in range 0 - 1200 seconds. Defaults to 300 seconds."
							}
						}
					},
					chat: {
						bsonType: "object",
						properties: {
							enableAutoAnswer: {
								bsonType: "bool",
								description: "Indicates if auto-answer is enabled for the given media type or subtype (default is false).  Subtype settings take precedence over media type settings."
							},
							alertingTimeoutSeconds: {
								bsonType: "int",
								description: "The alerting timeout for the media type, in seconds"
							},
							serviceLevel: {
								bsonType: "object",
								properties: {
									percentage: {
										bsonType: "double",
										description: "The desired Service Level. A value between 0 and 1."
									},
									durationMs: {
										bsonType: "long",
										description: "Service Level target in milliseconds."
									}
								}
							},
							autoAnswerAlertToneSeconds: {
								bsonType: "double",
								description: "How long to play the alerting tone for an auto-answer interaction"
							},
							manualAnswerAlertToneSeconds: {
								bsonType: "double",
								description: "How long to play the alerting tone for a manual-answer interaction"
							},
							subTypeSettings: {
								bsonType: "object",
								description: "Map of media subtype to media subtype specific settings.",
								additionalProperties: {
									bsonType: "object",
									properties: {
										enableAutoAnswer: {
											bsonType: "bool",
											description: "Indicates if auto-answer is enabled for the given media type or subtype (default is false).  Subtype settings take precedence over media type settings."
										}
									}
								}
							}
						}
					},
					email: {
						bsonType: "object",
						properties: {
							enableAutoAnswer: {
								bsonType: "bool",
								description: "Indicates if auto-answer is enabled for the given media type or subtype (default is false).  Subtype settings take precedence over media type settings."
							},
							alertingTimeoutSeconds: {
								bsonType: "int",
								description: "The alerting timeout for the media type, in seconds"
							},
							serviceLevel: {
								bsonType: "object",
								properties: {
									percentage: {
										bsonType: "double",
										description: "The desired Service Level. A value between 0 and 1."
									},
									durationMs: {
										bsonType: "long",
										description: "Service Level target in milliseconds."
									}
								}
							},
							autoAnswerAlertToneSeconds: {
								bsonType: "double",
								description: "How long to play the alerting tone for an auto-answer interaction"
							},
							manualAnswerAlertToneSeconds: {
								bsonType: "double",
								description: "How long to play the alerting tone for a manual-answer interaction"
							},
							subTypeSettings: {
								bsonType: "object",
								description: "Map of media subtype to media subtype specific settings.",
								additionalProperties: {
									bsonType: "object",
									properties: {
										enableAutoAnswer: {
											bsonType: "bool",
											description: "Indicates if auto-answer is enabled for the given media type or subtype (default is false).  Subtype settings take precedence over media type settings."
										}
									}
								}
							}
						}
					},
					message: {
						bsonType: "object",
						properties: {
							enableAutoAnswer: {
								bsonType: "bool",
								description: "Indicates if auto-answer is enabled for the given media type or subtype (default is false).  Subtype settings take precedence over media type settings."
							},
							alertingTimeoutSeconds: {
								bsonType: "int",
								description: "The alerting timeout for the media type, in seconds"
							},
							serviceLevel: {
								bsonType: "object",
								properties: {
									percentage: {
										bsonType: "double",
										description: "The desired Service Level. A value between 0 and 1."
									},
									durationMs: {
										bsonType: "long",
										description: "Service Level target in milliseconds."
									}
								}
							},
							autoAnswerAlertToneSeconds: {
								bsonType: "double",
								description: "How long to play the alerting tone for an auto-answer interaction"
							},
							manualAnswerAlertToneSeconds: {
								bsonType: "double",
								description: "How long to play the alerting tone for a manual-answer interaction"
							},
							subTypeSettings: {
								bsonType: "object",
								description: "Map of media subtype to media subtype specific settings.",
								additionalProperties: {
									bsonType: "object",
									properties: {
										enableAutoAnswer: {
											bsonType: "bool",
											description: "Indicates if auto-answer is enabled for the given media type or subtype (default is false).  Subtype settings take precedence over media type settings."
										}
									}
								}
							}
						}
					}
				}
			},
			routingRules: {
				bsonType: "array",
				description: "The routing rules for the queue, used for Preferred Agent Routing.",
				items: {
					bsonType: "object",
					properties: {
						operator: {
							bsonType: "string",
							description: "matching operator.  MEETS_THRESHOLD matches any agent with a score at or above the rule's threshold.  ANY matches all specified agents, regardless of score.",
							enum: ["MEETS_THRESHOLD", "ANY"]
						},
						threshold: {
							bsonType: "int",
							description: "threshold required for routing attempt (generally an agent score).  may be null for operator ANY."
						},
						waitSeconds: {
							bsonType: "double",
							description: "seconds to wait in this rule before moving to the next"
						}
					}
				}
			},
			conditionalGroupRouting: {
				bsonType: "object",
				properties: {
					rules: {
						bsonType: "array",
						description: "The set of rules to be executed for each conversation",
						items: {
							bsonType: "object",
							properties: {
								queue: {
									bsonType: "object",
									properties: {
										id: {
											bsonType: "string"
										},
										name: {
											bsonType: "string"
										},
										selfUri: {
											bsonType: "string"
										}
									}
								},
								metric: {
									bsonType: "string",
									description: "The queue metric being evaluated",
									enum: ["EstimatedWaitTime", "ServiceLevel"]
								},
								operator: {
									bsonType: "string",
									description: "The operator that compares the actual value against the condition value",
									enum: ["GreaterThan", "GreaterThanOrEqualTo", "LessThan", "LessThanOrEqualTo"]
								},
								conditionValue: {
									bsonType: "double",
									description: "The limit value, beyond which a rule evaluates as true"
								},
								groups: {
									bsonType: "array",
									description: "The group(s) to activate if the rule evaluates as true",
									uniqueItems: true,
									items: {
										bsonType: "object",
										properties: {
											id: {
												bsonType: "string",
												description: "The globally unique identifier for the object."
											},
											name: {
												bsonType: "string"
											},
											division: {
												bsonType: "object",
												properties: {
													id: {
														bsonType: "string",
														description: "The globally unique identifier for the object."
													},
													name: {
														bsonType: "string"
													},
													selfUri: {
														bsonType: "string",
														description: "The URI for this object"
													}
												}
											},
											type: {
												bsonType: "string",
												description: "The group type",
												enum: ["TEAM", "GROUP", "SKILLGROUP"]
											},
											memberCount: {
												bsonType: "int",
												description: "The number of members in this group"
											},
											selfUri: {
												bsonType: "string",
												description: "The URI for this object"
											}
										}
									}
								},
								waitSeconds: {
									bsonType: "int",
									description: "The number of seconds to wait in this rule, if it evaluates as true, before evaluating the next rule.  For the final rule, this is ignored, so need not be specified."
								}
							}
						}
					}
				}
			},
			bullseye: {
				bsonType: "object",
				properties: {
					rings: {
						bsonType: "array",
						description: "The bullseye rings configured for this queue.",
						items: {
							bsonType: "object",
							properties: {
								expansionCriteria: {
									bsonType: "array",
									description: "The conditions that will trigger conversations to move to the next bullseye ring.",
									items: {
										bsonType: "object",
										properties: {
											type: {
												bsonType: "string",
												enum: ["TIMEOUT_SECONDS"]
											},
											threshold: {
												bsonType: "double"
											}
										}
									}
								},
								actions: {
									bsonType: "object",
									properties: {
										skillsToRemove: {
											bsonType: "array",
											uniqueItems: true,
											items: {
												bsonType: "object",
												properties: {
													name: {
														bsonType: "string"
													},
													id: {
														bsonType: "string"
													},
													selfUri: {
														bsonType: "string"
													}
												}
											}
										}
									}
								},
								memberGroups: {
									bsonType: "array",
									description: "The groups of agents associated with the ring, if any.  Ring membership will update to match group membership changes.",
									uniqueItems: true,
									items: {
										bsonType: "object",
										properties: {
											id: {
												bsonType: "string",
												description: "The globally unique identifier for the object."
											},
											name: {
												bsonType: "string"
											},
											division: {
												bsonType: "object",
												properties: {
													id: {
														bsonType: "string",
														description: "The globally unique identifier for the object."
													},
													name: {
														bsonType: "string"
													},
													selfUri: {
														bsonType: "string",
														description: "The URI for this object"
													}
												}
											},
											type: {
												bsonType: "string",
												description: "The group type",
												enum: ["TEAM", "GROUP", "SKILLGROUP"]
											},
											memberCount: {
												bsonType: "int",
												description: "The number of members in this group"
											},
											selfUri: {
												bsonType: "string",
												description: "The URI for this object"
											}
										}
									}
								}
							}
						}
					}
				}
			},
			scoringMethod: {
				bsonType: "string",
				description: "The Scoring Method for the queue",
				enum: ["TimestampAndPriority", "PriorityOnly"]
			},
			acwSettings: {
				bsonType: "object",
				properties: {
					wrapupPrompt: {
						bsonType: "string",
						description: "This field controls how the UI prompts the agent for a wrapup.",
						enum: ["MANDATORY", "OPTIONAL", "MANDATORY_TIMEOUT", "MANDATORY_FORCED_TIMEOUT", "AGENT_REQUESTED"]
					},
					timeoutMs: {
						bsonType: "int",
						description: "The amount of time the agent can stay in ACW (Min: 1 sec, Max: 60 min).  Can only be used when ACW is AGENT_REQUESTED, MANDATORY_TIMEOUT or MANDATORY_FORCED_TIMEOUT."
					}
				}
			},
			skillEvaluationMethod: {
				bsonType: "string",
				description: "The skill evaluation method to use when routing conversations.",
				enum: ["NONE", "BEST", "ALL"]
			},
			memberGroups: {
				bsonType: "array",
				description: "The groups of agents associated with the queue, if any.  Queue membership will update to match group membership changes.",
				uniqueItems: true,
				items: {
					bsonType: "object",
					properties: {
						id: {
							bsonType: "string",
							description: "The globally unique identifier for the object."
						},
						name: {
							bsonType: "string"
						},
						division: {
							bsonType: "object",
							properties: {
								id: {
									bsonType: "string",
									description: "The globally unique identifier for the object."
								},
								name: {
									bsonType: "string"
								},
								selfUri: {
									bsonType: "string",
									description: "The URI for this object"
								}
							}
						},
						type: {
							bsonType: "string",
							description: "The group type",
							enum: ["TEAM", "GROUP", "SKILLGROUP"]
						},
						memberCount: {
							bsonType: "int",
							description: "The number of members in this group"
						},
						selfUri: {
							bsonType: "string",
							description: "The URI for this object"
						}
					}
				}
			},
			queueFlow: {
				bsonType: "object",
				properties: {
					id: {
						bsonType: "string"
					},
					name: {
						bsonType: "string"
					},
					selfUri: {
						bsonType: "string"
					}
				}
			},
			emailInQueueFlow: {
				bsonType: "object",
				properties: {
					id: {
						bsonType: "string"
					},
					name: {
						bsonType: "string"
					},
					selfUri: {
						bsonType: "string"
					}
				}
			},
			messageInQueueFlow: {
				bsonType: "object",
				properties: {
					id: {
						bsonType: "string"
					},
					name: {
						bsonType: "string"
					},
					selfUri: {
						bsonType: "string"
					}
				}
			},
			whisperPrompt: {
				bsonType: "object",
				properties: {
					id: {
						bsonType: "string"
					},
					name: {
						bsonType: "string"
					},
					selfUri: {
						bsonType: "string"
					}
				}
			},
			onHoldPrompt: {
				bsonType: "object",
				properties: {
					id: {
						bsonType: "string"
					},
					name: {
						bsonType: "string"
					},
					selfUri: {
						bsonType: "string"
					}
				}
			},
			autoAnswerOnly: {
				bsonType: "bool",
				description: "Specifies whether the configured whisper should play for all ACD calls, or only for those which are auto-answered."
			},
			cannedResponseLibraries: {
				bsonType: "object",
				properties: {
					libraryIds: {
						bsonType: "array",
						description: "Set of canned response library IDs associated with the queue only when mode is SelectedOnly.",
						uniqueItems: true,
						items: {
							bsonType: "string"
						}
					},
					mode: {
						bsonType: "string",
						description: "The association mode of canned response libraries to queue",
						enum: ["All", "SelectedOnly", "None"]
					}
				}
			},
			enableTranscription: {
				bsonType: "bool",
				description: "Indicates whether voice transcription is enabled for this queue."
			},
			enableAudioMonitoring: {
				bsonType: "bool",
				description: "Indicates whether audio monitoring is enabled for this queue."
			},
			enableManualAssignment: {
				bsonType: "bool",
				description: "Indicates whether manual assignment is enabled for this queue."
			},
			agentOwnedRouting: {
				bsonType: "object",
				properties: {
					enableAgentOwnedCallbacks: {
						bsonType: "bool",
						description: "Indicates if Agent Owned Callbacks are enabled for the queue"
					},
					maxOwnedCallbackHours: {
						bsonType: "int",
						description: "The max amount of time a callback can be owned (in hours); Allowable range 1 - 168 hour(s) (inclusive)"
					},
					maxOwnedCallbackDelayHours: {
						bsonType: "int",
						description: "The max amount of time a callback can be scheduled out into the future (in hours); Allowable range 1 - 720 hour(s) (inclusive)"
					}
				}
			},
			directRouting: {
				bsonType: "object",
				properties: {
					callMediaSettings: {
						bsonType: "object",
						properties: {
							useAgentAddressOutbound: {
								bsonType: "bool",
								description: "Toggle that enables using an agent's Direct Routing address outbound on behalf of queue for this media type."
							}
						}
					},
					emailMediaSettings: {
						bsonType: "object",
						properties: {
							useAgentAddressOutbound: {
								bsonType: "bool",
								description: "Toggle that enables using an agent's Direct Routing address outbound on behalf of queue for this media type."
							}
						}
					},
					messageMediaSettings: {
						bsonType: "object",
						properties: {
							useAgentAddressOutbound: {
								bsonType: "bool",
								description: "Toggle that enables using an agent's Direct Routing address outbound on behalf of queue for this media type."
							}
						}
					},
					backupQueueId: {
						bsonType: "string",
						description: "ID of another queue to be used as the default backup if an agent does not have their Backup Settings configured. If not set, the current queue will be used as backup, but with Direct Routing criteria removed from the conversation."
					},
					waitForAgent: {
						bsonType: "bool",
						description: "Flag indicating if Direct Routing interactions should wait for Direct Routing agent or go immediately to selected backup."
					},
					agentWaitSeconds: {
						bsonType: "int",
						description: "Time (in seconds) that a Direct Routing interaction will wait for Direct Routing agent before going to selected backup. Valid range [60, 864000]."
					}
				}
			},
			callingPartyName: {
				bsonType: "string",
				description: "The name to use for caller identification for outbound calls from this queue."
			},
			callingPartyNumber: {
				bsonType: "string",
				description: "The phone number to use for caller identification for outbound calls from this queue."
			},
			defaultScripts: {
				bsonType: "object",
				description: "The default script Ids for the communication types.",
				additionalProperties: {
					bsonType: "object",
					properties: {
						id: {
							bsonType: "string",
							description: "The globally unique identifier for the object."
						},
						name: {
							bsonType: "string"
						},
						division: {
							bsonType: "object",
							properties: {
								id: {
									bsonType: "string",
									description: "The globally unique identifier for the object."
								},
								name: {
									bsonType: "string"
								},
								selfUri: {
									bsonType: "string",
									description: "The URI for this object"
								}
							}
						},
						versionId: {
							bsonType: "string"
						},
						createdDate: {
							bsonType: "date",
							description: "Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z"
						},
						modifiedDate: {
							bsonType: "date",
							description: "Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z"
						},
						publishedDate: {
							bsonType: "date",
							description: "Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z"
						},
						versionDate: {
							bsonType: "date",
							description: "Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z"
						},
						startPageId: {
							bsonType: "string"
						},
						startPageName: {
							bsonType: "string"
						},
						features: {
							bsonType: "object"
						},
						variables: {
							bsonType: "object"
						},
						customActions: {
							bsonType: "object"
						},
						pages: {
							bsonType: "array",
							items: {
								bsonType: "object",
								properties: {
									id: {
										bsonType: "string",
										description: "The globally unique identifier for the object."
									},
									name: {
										bsonType: "string"
									},
									versionId: {
										bsonType: "string"
									},
									createdDate: {
										bsonType: "date",
										description: "Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z"
									},
									modifiedDate: {
										bsonType: "date",
										description: "Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z"
									},
									rootContainer: {
										bsonType: "object",
										additionalProperties: {
											bsonType: "object"
										}
									},
									properties: {
										bsonType: "object",
										additionalProperties: {
											bsonType: "object"
										}
									},
									selfUri: {
										bsonType: "string",
										description: "The URI for this object"
									}
								}
							}
						},
						selfUri: {
							bsonType: "string",
							description: "The URI for this object"
						}
					}
				}
			},
			outboundMessagingAddresses: {
				bsonType: "object",
				properties: {
					smsAddress: {
						bsonType: "object",
						properties: {
							id: {
								bsonType: "string"
							},
							name: {
								bsonType: "string"
							},
							selfUri: {
								bsonType: "string"
							}
						}
					},
					openMessagingRecipient: {
						bsonType: "object",
						properties: {
							id: {
								bsonType: "string"
							},
							name: {
								bsonType: "string"
							},
							selfUri: {
								bsonType: "string"
							}
						}
					},
					whatsAppRecipient: {
						bsonType: "object",
						properties: {
							id: {
								bsonType: "string"
							},
							name: {
								bsonType: "string"
							},
							selfUri: {
								bsonType: "string"
							}
						}
					}
				}
			},
			outboundEmailAddress: {
				bsonType: "object",
				properties: {
					domain: {
						bsonType: "object",
						properties: {
							id: {
								bsonType: "string"
							},
							name: {
								bsonType: "string"
							},
							selfUri: {
								bsonType: "string"
							}
						}
					},
					route: {
						bsonType: "object",
						required: ["fromName", "pattern"],
						properties: {
							id: {
								bsonType: "string",
								description: "The globally unique identifier for the object."
							},
							name: {
								bsonType: "string"
							},
							pattern: {
								bsonType: "string",
								description: "The search pattern that the mailbox name should match."
							},
							queue: {
								bsonType: "object",
								properties: {
									id: {
										bsonType: "string"
									},
									name: {
										bsonType: "string"
									},
									selfUri: {
										bsonType: "string"
									}
								}
							},
							priority: {
								bsonType: "int",
								description: "The priority to use for routing."
							},
							skills: {
								bsonType: "array",
								description: "The skills to use for routing.",
								items: {
									bsonType: "object",
									properties: {
										id: {
											bsonType: "string"
										},
										name: {
											bsonType: "string"
										},
										selfUri: {
											bsonType: "string"
										}
									}
								}
							},
							language: {
								bsonType: "object",
								properties: {
									id: {
										bsonType: "string"
									},
									name: {
										bsonType: "string"
									},
									selfUri: {
										bsonType: "string"
									}
								}
							},
							fromName: {
								bsonType: "string",
								description: "The sender name to use for outgoing replies."
							},
							fromEmail: {
								bsonType: "string",
								description: "The sender email to use for outgoing replies."
							},
							flow: {
								bsonType: "object",
								properties: {
									id: {
										bsonType: "string"
									},
									name: {
										bsonType: "string"
									},
									selfUri: {
										bsonType: "string"
									}
								}
							},
							replyEmailAddress: {
								bsonType: "object",
								additionalProperties: true
							},
							autoBcc: {
								bsonType: "array",
								description: "The recipients that should be automatically blind copied on outbound emails associated with this InboundRoute.",
								items: {
									bsonType: "object",
									properties: {
										email: {
											bsonType: "string"
										},
										name: {
											bsonType: "string"
										}
									}
								}
							},
							spamFlow: {
								bsonType: "object",
								properties: {
									id: {
										bsonType: "string"
									},
									name: {
										bsonType: "string"
									},
									selfUri: {
										bsonType: "string"
									}
								}
							},
							signature: {
								bsonType: "object",
								properties: {
									enabled: {
										bsonType: "bool",
										description: "A toggle to enable the signature on email send."
									},
									cannedResponseId: {
										bsonType: "string",
										description: "The identifier referring to an email signature canned response."
									},
									alwaysIncluded: {
										bsonType: "bool",
										description: "A toggle that defines if a signature is always included or only set on the first email in an email chain."
									},
									inclusionType: {
										bsonType: "string",
										description: "The configuration to indicate when the signature of a conversation has to be included",
										enum: ["Draft", "Send", "SendOnce"]
									}
								}
							},
							historyInclusion: {
								bsonType: "string",
								description: "The configuration to indicate how the history of a conversation has to be included in a draft",
								enum: ["Include", "Exclude", "Optional"]
							},
							allowMultipleActions: {
								bsonType: "bool",
								description: "Control if multiple actions are allowed on this route. When true the disconnect has to be done manually. When false a conversation will be disconnected by the system after every action"
							},
							selfUri: {
								bsonType: "string",
								description: "The URI for this object"
							}
						}
					}
				}
			},
			peerId: {
				bsonType: "string",
				description: "The ID of an associated external queue."
			},
			suppressInQueueCallRecording: {
				bsonType: "bool",
				description: "Indicates whether recording in-queue calls is suppressed for this queue."
			},
			selfUri: {
				bsonType: "string",
				description: "The URI for this object"
			}
		}
	}
};

export { queueJSONSchema };
