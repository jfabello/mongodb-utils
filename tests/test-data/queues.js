const queues = {
	entities: [
		{
			id: "ba3e5480-0c13-4412-856b-980d58df9254",
			name: "Queue 1",
			division: {
				id: "d3afddea-a2a8-4891-8cf2-047a72fcf8d2",
				name: "Division A",
				selfUri: "/api/v2/authorization/divisions/d3afddea-a2a8-4891-8cf2-047a72fcf8d2"
			},
			dateCreated: "2023-12-13T20:50:44.230Z",
			dateModified: "2024-09-04T17:08:27.268Z",
			modifiedBy: "8990d1a1-7856-41a6-87ff-43e245a7db8f",
			createdBy: "124ba5b1-37eb-4caf-8323-7b78f9fbe0b1",
			memberCount: 3,
			userMemberCount: 3,
			joinedMemberCount: 3,
			mediaSettings: {
				call: {
					alertingTimeoutSeconds: 8,
					serviceLevel: {
						percentage: 0.85,
						durationMs: 20000
					}
				},
				callback: {
					alertingTimeoutSeconds: 30,
					serviceLevel: {
						percentage: 0.8,
						durationMs: 20000
					},
					mode: "AgentFirst",
					enableAutoDialAndEnd: false,
					autoDialDelaySeconds: 300,
					autoEndDelaySeconds: 300
				},
				chat: {
					alertingTimeoutSeconds: 30,
					serviceLevel: {
						percentage: 0.8,
						durationMs: 20000
					}
				},
				email: {
					alertingTimeoutSeconds: 300,
					serviceLevel: {
						percentage: 0.8,
						durationMs: 86400000
					}
				},
				message: {
					alertingTimeoutSeconds: 30,
					serviceLevel: {
						percentage: 0.8,
						durationMs: 20000
					}
				}
			},
			scoringMethod: "TimestampAndPriority",
			acwSettings: {
				wrapupPrompt: "MANDATORY"
			},
			skillEvaluationMethod: "ALL",
			autoAnswerOnly: true,
			enableManualAssignment: false,
			defaultScripts: {
				CALL: {
					id: "17e23fd7-0b3a-476e-a77e-37f89e8d186b",
					selfUri: "/api/v2/scripts/17e23fd7-0b3a-476e-a77e-37f89e8d186b"
				}
			},
			suppressInQueueCallRecording: true,
			selfUri: "/api/v2/routing/queues/ba3e5480-0c13-4412-856b-980d58df9254"
		},
		{
			id: "e7bf6aae-4689-4135-a3aa-0c81d74547a7",
			name: "Queue 2",
			division: {
				id: "d3afddea-a2a8-4891-8cf2-047a72fcf8d2",
				name: "Division B",
				selfUri: "/api/v2/authorization/divisions/d3afddea-a2a8-4891-8cf2-047a72fcf8d2"
			},
			dateCreated: "2023-12-13T22:54:58.046Z",
			dateModified: "2024-05-09T23:43:29.618Z",
			modifiedBy: "8990d1a1-7856-41a6-87ff-43e245a7db8f",
			createdBy: "66406ef8-d63f-404a-909e-485624fa3b9e",
			memberCount: 26,
			userMemberCount: 26,
			joinedMemberCount: 17,
			mediaSettings: {
				call: {
					alertingTimeoutSeconds: 8,
					serviceLevel: {
						percentage: 0.85,
						durationMs: 20000
					}
				},
				callback: {
					alertingTimeoutSeconds: 30,
					serviceLevel: {
						percentage: 0.8,
						durationMs: 20000
					},
					mode: "AgentFirst",
					enableAutoDialAndEnd: false,
					autoDialDelaySeconds: 300,
					autoEndDelaySeconds: 300
				},
				chat: {
					alertingTimeoutSeconds: 30,
					serviceLevel: {
						percentage: 0.8,
						durationMs: 20000
					}
				},
				email: {
					alertingTimeoutSeconds: 300,
					serviceLevel: {
						percentage: 0.8,
						durationMs: 86400000
					}
				},
				message: {
					alertingTimeoutSeconds: 30,
					serviceLevel: {
						percentage: 0.8,
						durationMs: 20000
					}
				}
			},
			scoringMethod: "PriorityOnly",
			acwSettings: {
				wrapupPrompt: "MANDATORY"
			},
			skillEvaluationMethod: "BEST",
			onHoldPrompt: {
				id: "9aff7ded-ea56-4290-b620-79a3921cd6ba",
				name: "Default hold prompt",
				selfUri: "/api/v2/architect/prompts/9aff7ded-ea56-4290-b620-79a3921cd6ba"
			},
			autoAnswerOnly: false,
			defaultScripts: {},
			suppressInQueueCallRecording: true,
			selfUri: "/api/v2/routing/queues/e7bf6aae-4689-4135-a3aa-0c81d74547a7"
		}
	]
};

export { queues };
