
SET IDENTITY_INSERT [ers].[Page] ON 

GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (1, N'Timer Widget', N'TimerWidget', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Dashboard', NULL, NULL, NULL, NULL, N'widget')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (2, N'Affected On Board KPI', N'AffectedOnBoardKPI', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Dashboard', NULL, NULL, 0, 0, N'Widget')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (3, N'Passenger KPI', N'PassengerKPI', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 2, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (4, N'Crew Members', N'CrewMembers', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 2, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (5, N'Cargo', N'Cargo', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 2, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (6, N'Ground Members', N'GroundMembers', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 2, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (7, N'PDA Casualty Status KPI', N'PDACasualtyStatusKPI', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Dashboard', NULL, NULL, 0, 0, N'Widget')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (8, N'Injured', N'Injured', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 7, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (9, N'Deceased', N'Deceased', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 7, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (10, N'Missing', N'Missing', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 7, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (11, N'Others', N'Others', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 7, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (12, N'Demand Received KPI', N'DemandReceivedKPI', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Dashboard', NULL, NULL, 0, 0, N'Widget')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (13, N'Demand Received View All', N'DemandReceivedViewAll', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 12, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (14, N'Demand Received Sub Dept', N'DemandReceivedSubDept', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 12, N'Dashboard', NULL, NULL, NULL, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (15, N'Demand Raised KPI', N'DemandRaisedKPI', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Dashboard', NULL, NULL, 0, 0, N'Widget')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (16, N'Demand Raised View All', N'DemandRaisedViewAll', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 15, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (17, N'Demand Raised Sub dept', N'DemandRaisedSubdept', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 15, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (18, N'Checklist KPI', N'ChecklistKPI', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Dashboard', NULL, NULL, 0, 0, N'widget')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (19, N'Checklist KPI View All', N'ChecklistKPIViewAll', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 18, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (20, N'Checklist KPI Sub Dept', N'ChecklistKPISubDept', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 18, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (21, N'Broadcast Message Widget', N'BroadcastMessageWidget', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Dashboard', NULL, NULL, NULL, NULL, N'widget')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (22, N'President Message', N'PresidentMessage', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Dashboard', NULL, NULL, 0, 0, N'Widget')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (23, N'Media Message', N'MediaMessage', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Dashboard', NULL, NULL, NULL, NULL, N'widget')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (24, N'All Tabs', N'AllTabs', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Dashboard', NULL, NULL, NULL, NULL, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (25, N'Checklists', N'Checklist', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 24, N'Dashboard', NULL, N'/pages/dashboard/actionable', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (26, N'Open Checklist', N'ActiveChecklist', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 25, N'Dashboard', NULL, N'./open', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (27, N'Update Checklist Additional Info', N'UpdateChecklistAdditionalInfo', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 25, N'Dashboard', NULL, NULL, NULL, NULL, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (28, N'Close Checklist', N'ClosedChecklist', 2, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 25, N'Dashboard', NULL, N'./close', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (29, N'View Checklist Additional Info', N'ViewChecklistAdditionalInfo', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 25, N'Dashboard', NULL, NULL, NULL, NULL, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (30, N'Demand', N'Demand', 2, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 24, N'Dashboard', NULL, N'/pages/dashboard/demand', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (31, N'Assigned To Me', N'AssignedToMeDemand', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 30, N'Dashboard', NULL, N'./assigned', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (32, N'Completed', N'CompleteDemand', 4, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 30, N'Dashboard', NULL, N'./completed', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (33, N'My Demand', N'MyDemand', 2, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 30, N'Dashboard', NULL, N'./own', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (34, N'Create Demand', N'CreateDemand', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 33, N'Dashboard', NULL, NULL, NULL, NULL, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (35, N'Approval Pending', N'PendingDemand', 3, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 30, N'Dashboard', NULL, N'./approval', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (36, N'Approve Demand/Reject Demand', N'Approve-RejectDemand', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 35, N'Dashboard', NULL, NULL, NULL, NULL, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (37, N'Completed Demand', N'CompletedDemand', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 30, N'Dashboard', NULL, NULL, NULL, NULL, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (38, N'Accept/Reject Demand', N'AcceptRejectDemand', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 37, N'Dashboard', NULL, NULL, NULL, NULL, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (40, N'Affected People', N'AffectedPeople', 3, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 24, N'Dashboard', NULL, N'/pages/dashboard/people', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (41, N'Affected People', N'AffectedPeople', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 40, N'Dashboard', NULL, N'./detail', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (42, N'Affected People Additional Information View', N'AffectedPeopleSearch', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 40, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (43, N'Affected People Update Additional Info', N'AffectedPeopleUpdateAdditionalInfo', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 42, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (44, N'Verify Affected People', N'VerifyAffectedPeople', 2, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 40, N'Dashboard', NULL, N'./verify', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (45, N'Verify', N'Verify', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 44, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (46, N'Affected Cargo', N'AffectedCargo', 4, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 24, N'Dashboard', NULL, N'/pages/dashboard/cargo', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (47, N'Cargo', N'Cargo', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 46, N'Dashboard', NULL, N'./detail', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (48, N'Affected Cargo Additional Information View', N'AffectedCargoAdditionalInformationView', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 46, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (49, N'Affected Cargo Update Additional Info', N'AffectedCargoUpdateAdditionalInfo', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 48, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (50, N'Verify Cargo', N'VerifyCargo', 2, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 46, N'Dashboard', NULL, N'./verify', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (51, N'Verify', N'Verify', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 50, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (52, N'President Messages', N'PresidentMessage', 6, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 24, N'Dashboard', NULL, N'/pages/dashboard/presidentMessage', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (53, N'President Message Release', N'PresidentMessageRelease', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 52, N'Dashboard', NULL, N'./release', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (54, N'Add New President Message', N'AddNewPresidentMessage', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 53, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (55, N'Edit President Message', N'EditPresidentMessage', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 53, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (56, N'Send President Message for Approval', N'SendPresidentMessageforApproval', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 53, N'Dashboard', NULL, NULL, 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (57, N'Download President Message', N'DownloadPresidentMessage', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 53, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (58, N'Pending Approvals', N'PresidentMessagePendingApprovals', 2, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 52, N'Dashboard', NULL, N'./approvalpending', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (59, N'Edit President Message', N'EditPresidentMessage', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 58, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (60, N'Approve/Reject President Message', N'ApproveRejectPresidentMessage', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 58, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (62, N'Media Messages', N'MediaMessage', 7, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 24, N'Dashboard', NULL, N'/pages/dashboard/media', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (63, N'Media Release', N'MediaMessageRelease', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 62, N'Dashboard', NULL, N'./release', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (64, N'Add Edit Media Release', N'AddEditMediaRelease', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 63, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (66, N'Send Media Release for Approval', N'SendMediaReleaseforApproval', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 63, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (67, N'Download Media Release', N'DownloadMediaRelease', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 63, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (68, N'Pending Approval', N'PendingApproval', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 63, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (69, N'Edit Media Message', N'EditMediaMessage', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 68, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (70, N'Approve/Reject Media Message', N'ApproveRejectMediaMessage', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 68, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (72, N'Other Query', N'OtherQuery', 8, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 24, N'Dashboard', NULL, N'/pages/dashboard/otherQuery', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (73, N'Received Calls', N'ReceivedCalls', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 72, N'Dashboard', NULL, N'./receivedCalls', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (74, N'Received Calls Edit', N'ReceivedCallsEdit', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 73, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (75, N'Assigned Calls', N'AssignedCalls', 2, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 72, N'Dashboard', NULL, N'./assignedcalls', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (76, N'Assigned Calls Edit', N'AssignedCallsEdit', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 75, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (77, N'Crew Query', N'CrewQuery', 9, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 24, N'Dashboard', NULL, N'/pages/dashboard/crewQuery', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (78, N'Received Calls', N'ReceivedCalls', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 77, N'Dashboard', NULL, N'./receivedCalls', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (79, N'Edit Received Calls', N'EditReceivedCalls', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 78, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (80, N'Assigned Calls', N'AssignedCalls', 2, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 77, N'Dashboard', NULL, N'./assignedcalls', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (81, N'Assigned Calls Edit', N'AssignedCallsEdit', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 80, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (82, N'Passenger Query', N'PassengerQuery', 10, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 24, N'Dashboard', NULL, N'/pages/dashboard/passengerquery', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (83, N'Received Calls', N'ReceivedCalls', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 82, N'Dashboard', NULL, N'./receivedCalls', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (84, N'Tab Passenger Query Received Calls Edit', N'TabPassengerQueryReceivedCallsEdit', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 83, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (85, N'Assigned Calls', N'AssignedCalls', 2, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 82, N'Dashboard', NULL, N'./assignedcalls', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (86, N'Tab Assigned Calls Edit', N'TabAssignedCallsEdit', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 85, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (87, N'Cargo Query', N'CargoQuery', 11, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 24, N'Dashboard', NULL, N'/pages/dashboard/cargoquery', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (88, N'Received Calls', N'ReceivedCalls', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 87, N'Dashboard', NULL, N'./receivedCalls', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (89, N'Tab Received Calls Edit', N'TabReceivedCallsEdit', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 88, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (90, N'Assigned Calls', N'AssignedCalls', 2, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 87, N'Dashboard', NULL, N'./assignedcalls', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (91, N'Tab Assigned Calls Edit', N'TabAssignedCallsEdit', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 90, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (92, N'Media Query', N'MediaQuery', 12, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 24, N'Dashboard', NULL, N'/pages/dashboard/mediaquery', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (93, N'Received Calls', N'ReceivedCalls', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 92, N'Dashboard', NULL, N'./receivedCalls', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (94, N'Tab Received Calls Edit', N'TabReceivedCallsEdit', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 93, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (95, N'Assigned Calls', N'AssignedCalls', 2, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 92, N'Dashboard', NULL, N'./assignedcalls', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (96, N'Tab Assigned Calls Edit', N'TabAssignedCallsEdit', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 95, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (97, N'Future Travel Query', N'FutureTravelQuery', 13, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 24, N'Dashboard', NULL, N'/pages/dashboard/futuretravelquery', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (98, N'Received Calls', N'ReceivedCalls', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 97, N'Dashboard', NULL, N'./receivedCalls', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (99, N'Received Calls Edit', N'ReceivedCallsEdit', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 98, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (100, N'Assigned Calls', N'AssignedCalls', 2, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 97, N'Dashboard', NULL, N'./assignedcallsc', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (101, N'Assigned Calls Edit', N'AssignedCallsEdit', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 100, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (102, N'General Update Query', N'GeneralUpdateQuery', 14, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 24, N'Dashboard', NULL, N'/pages/dashboard/generalupdatequery', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (103, N'Received Calls', N'ReceivedCalls', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 102, N'Dashboard', NULL, N'./receivedCalls', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (104, N'General Update Query Received Calls Edit', N'GeneralUpdateQueryReceivedCallsEdit', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 103, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (105, N'Assigned Calls', N'AssignedCalls', 2, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 102, N'Dashboard', NULL, N'./assignedcalls', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (106, N'General Update Query Assigned Calls Edit', N'GeneralUpdateQueryAssignedCallsEdit', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 105, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (107, N'Situational Updates Query', N'SituationalUpdatesQuery', 15, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 24, N'Dashboard', NULL, N'/pages/dashboard/situationalupdatesquery', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (108, N'Received Calls', N'ReceivedCalls', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 107, N'Dashboard', NULL, N'./receivedCalls', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (109, N'Tab Situational Updates Query Received Calls Edit', N'TabSituationalUpdatesQueryReceivedCallsEdit', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 108, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (110, N'Assigned Calls', N'AssignedCalls', 2, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 107, N'Dashboard', NULL, N'./assignedcalls', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (111, N'Tab Situational Updates Query Assigned Calls Edit', N'TabSituationalUpdatesQueryAssignedCallsEdit', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 110, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (112, N'Customer Dissatisfaction Query', N'CustomerDissatisfactionQuery', 16, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 24, N'Dashboard', NULL, N'/pages/dashboard/customerdissatisfactionquery', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (113, N'Received Calls', N'ReceivedCalls', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 112, N'Dashboard', NULL, N'./receivedCalls', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (114, N'Tab Customer Dissatisfaction Query Received Calls Edit', N'TabCustomerDissatisfactionQueryReceivedCallsEdit', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 113, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (115, N'Assigned Calls', N'AssignedCalls', 2, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 112, N'Dashboard', NULL, N'./assignedcalls', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (116, N'Tab Customer Dissatisfaction Query Assigned Calls Edit', N'TabCustomerDissatisfactionQueryAssignedCallsEdit', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 115, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (117, N'Broadcast Messages', N'BroadcastMessage', 5, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 24, N'Dashboard', NULL, N'/pages/dashboard/broadcast', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (118, N'Add Edit Broadcast Message', N'AddEditBroadcastMessage', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 117, N'Dashboard', NULL, NULL, NULL, NULL, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (120, N'Show All Incident', N'ShowAllIncident', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (121, N'Show All Department', N'ShowAllDepartment', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (122, N'Telephone Directory', N'TelephoneDirectory', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Dashboard', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (123, N'All Tabs', N'AllTabs', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Master Data Management', NULL, NULL, 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (124, N'Userprofile', N'userprofile', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 123, N'Master Data Management', NULL, N'/pages/masterdata/userprofile', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (125, N'Add Edit User', N'AddEditUser', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 124, N'Master Data Management', NULL, NULL, 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (127, N'Checklist', N'masterdatachecklist', 2, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 123, N'Master Data Management', NULL, N'/pages/masterdata/checklist', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (128, N'Add Edit Checklist', N'AddEditChecklist', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 127, N'Master Data Management', NULL, NULL, 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (130, N'Dept-Functionality Mapping', N'Dept-FunctionalityMapping', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 123, N'Master Data Management', NULL, NULL, 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (131, N'Dept-Functionality Mapping Can view', N'Dept-FunctionalityMappingCanview', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 130, N'Master Data Management', NULL, NULL, 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (132, N'Dept-Functionality Mapping Only HOD', N'Dept-FunctionalityMappingOnlyHOD', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 130, N'Master Data Management', NULL, NULL, 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (133, N'User-Dept Mapping', N'User-DeptMapping', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 123, N'Master Data Management', NULL, NULL, 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (134, N'Select Member Of', N'SelectMemberOf', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 133, N'Master Data Management', NULL, NULL, 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (135, N'Select HOD', N'SelectHOD', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 133, N'Master Data Management', NULL, NULL, 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (136, N'Department', N'department', 4, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 123, N'Master Data Management', NULL, N'/pages/masterdata/department', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (137, N'Add Edit Dept', N'AddEditDept', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 136, N'Master Data Management', NULL, NULL, 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (139, N'Crisis Type', N'emergencytype', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 123, N'Master Data Management', NULL, NULL, 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (140, N'Add Edit Crisis Type', N'AddEditCrisisType', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 139, N'Master Data Management', NULL, NULL, 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (142, N'Crisis-Dept Mapping', N'Crisis-DeptMapping', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 123, N'Master Data Management', NULL, NULL, 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (143, N'Add Crisis-Dept Mapping', N'AddCrisis-DeptMapping', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 142, N'Master Data Management', NULL, NULL, 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (144, N'Responsible Station', N'ResponsibleStation', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 123, N'Master Data Management', NULL, NULL, 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (145, N'Add Edit Responsible Station', N'AddEditResponsibleStation', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 144, N'Master Data Management', NULL, NULL, 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (147, N'Delete Responsible Station', N'DeleteResponsibleStation', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 144, N'Master Data Management', NULL, NULL, 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (148, N'Demand Type', N'demandtype', 8, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 123, N'Master Data Management', NULL, N'/pages/masterdata/demandtype', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (149, N'Add Edit Demand Type', N'AddEditDemandType', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 148, N'Master Data Management', NULL, NULL, 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (151, N'Quicklinks', N'quicklink', 10, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 123, N'Master Data Management', NULL, N'/pages/masterdata/quicklink', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (152, N'Add Edit QuickLinks', N'AddEditQuickLinks', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 151, N'Master Data Management', NULL, NULL, 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (154, N'Notification Template', N'template', 11, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 123, N'Master Data Management', NULL, N'/pages/masterdata/template', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (155, N'Crisis Initiation', N'InitiateACrisis', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Crisis Initiation', NULL, NULL, 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (156, N'Upload File', N'UploadFile', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Manifest Data Upload', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (157, N'Notify people', N'NotifyPeople', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Notify people', NULL, NULL, 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (158, N'Call Center', N'CallCenter', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Call Center', NULL, NULL, NULL, NULL, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (159, N'Logging a Call', N'LoggingACall', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 158, N'Call Center', NULL, NULL, 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (160, N'Member Tracking', N'MemberTracking', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Member Tracking', NULL, NULL, 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (161, N'Allocating/Deallocating a member', N'AllocationDeallocationMember', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 160, N'Member Tracking', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (163, N'View History', N'ViewHistory', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 160, N'Member Tracking', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (164, N'Quick View', N'QuickView', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Quick View', NULL, NULL, 0, 0, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (165, N'View Quick links', N'ViewQuicklinks', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 164, N'Quick View', NULL, NULL, 0, 0, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (166, N'Dept wise Closure', N'DeptwiseClosure', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Deptwise Closure', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (167, N'Dept wise Close', N'DeptwiseClose', 1, 0, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 166, N'Deptwise Closure', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (168, N'Crisis Closure', N'CrisisClosure', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Crisis Closure', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (169, N'Crisis Closure', N'CrisisClosure', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Crisis Closure', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (170, N'View Closure Report', N'ViewClosureReport', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 169, N'Crisis Closure', NULL, NULL, NULL, NULL, N'page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (171, N'Archive Dashboard', N'Archive', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Archive Dashboard', NULL, NULL, 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (172, N'View Closed Incident', N'ViewClosedIncident', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 171, N'Archive Dashboard', NULL, NULL, 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (173, N'Reopen a Crisis', N'ReopenACrisis', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 171, N'Archive Dashboard', NULL, NULL, 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (174, N'Upload File', N'UploadFile', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 171, N'Archive Dashboard', NULL, NULL, 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (176, N'Archive Listing', N'ArchiveListing', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 171, N'Archive Listing', NULL, NULL, 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (177, N'Close Emergency', N'CloseEmergency', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Close Emergency', NULL, NULL, 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (178, N'Manifest Upload File', N'ManifestUploadFile', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'ManifestUploadFile', NULL, NULL, 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (179, N'Broadcast Message Widget ViewAll', N'BroadcastMessageWidgetViewAll', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 21, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (180, N'Broadcast Department Mapping', N'broadcastdepartment', 12, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 123, N'Master Data Management', NULL, N'/pages/masterdata/broadcastdepartment', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (181, N'Media Message ViewAll', N'MediaMessageViewAll', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 23, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (182, N'President Message ViewAll', N'PresidentMessageViewAll', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 22, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (183, N'Pending Approvals', N'MediaMessagePendingApprovals', 2, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 62, N'Dashboard', NULL, N'./approvalpending', 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (184, N'Ground Victims', N'GroundVictims', 17, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 24, N'Dashboard', NULL, N'/pages/dashboard/groundmembers', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (188, N'Crisis Department Mapping', N'emergencydepartment', 6, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 123, N'Master Data Management', NULL, N'/pages/masterdata/emergencydepartment', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (189, N'Responsible Station', N'emergencylocation', 7, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 123, N'Master Data Management', NULL, N'/pages/masterdata/affectedstation', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (194, N'View Checklist Trail', N'ViewChecklistTrail', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 25, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (195, N'Update Open Checklist', N'UpdateOpenChecklist', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 26, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (197, N'Update Close Checklist', N'UpdateCloseChecklist', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 28, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (198, N'Update Assign To Me Demand', N'UpdateAssignToMeDemand', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 31, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (199, N'Update Approved Demand', N'UpdateApprovedDemand', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 36, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (200, N'Update Completed Demand', N'UpdateCompletedDemand', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 37, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (201, N'Verify Verify Affected People', N'VerifyVerifyAffectedPeople', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 44, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (202, N'Verify Affected Cargo', N'VerifyAffectedCargo', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 46, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (204, N'Edit Pending President Message', N'EditPendingPresidentMessage', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 58, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (205, N'View Crisis Closure Report', N'ViewCrisisClosureReport', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 171, N'Archive Dashboard', NULL, NULL, 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (206, N'View Department Wise Closure Report', N'ViewDepartmentWiseClosureReport', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 171, N'Archive Dashboard', NULL, NULL, 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (207, N'View Other Report', N'ViewOtherReport', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 171, N'Archive Dashboard', NULL, NULL, 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (208, N'Upload Other Report', N'UploadOtherReport', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 171, N'Archive Dashboard', NULL, NULL, 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (209, N'View Readonly Crisis Information', N'ViewReadonlyCrisis', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Dashboard', NULL, NULL, NULL, NULL, N'widget')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (210, N'View Readonly Crisis Information for Archive', N'ViewReadonlyCrisisInformationforArchive', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 171, N'Archive Dashboard', NULL, NULL, 0, 0, N'Page')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (211, N'Show Affected People Is NOK Informed', N'ShowIsNOKInformed', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 40, N'Dashboard', NULL, NULL, 0, 0, N'Action')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (213, N'All Tabs', N'AllTabs', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), NULL, N'Archive Dashboard', NULL, NULL, NULL, NULL, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (214, N'Checklists', N'Checklist', 1, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 213, N'Archive Dashboard', NULL, N'/pages/archivedashboard/actionable', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (215, N'Demand', N'Demand', 2, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 213, N'Archive Dashboard', NULL, N'/pages/archivedashboard/demand', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (216, N'Affected People', N'AffectedPeople', 3, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 213, N'Archive Dashboard', NULL, N'/pages/archivedashboard/people', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (217, N'Affected Cargo', N'AffectedCargo', 4, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 213, N'Archive Dashboard', NULL, N'/pages/archivedashboard/cargo', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (218, N'President Messages', N'PresidentMessage', 6, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 213, N'Archive Dashboard', NULL, N'/pages/archivedashboard/presidentMessage', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (219, N'Media Messages', N'MediaMessage', 7, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 213, N'Archive Dashboard', NULL, N'/pages/archivedashboard/media', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (220, N'Other Query', N'OtherQuery', 8, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 213, N'Archive Dashboard', NULL, N'/pages/archivedashboard/otherQuery', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (221, N'Crew Query', N'CrewQuery', 9, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 213, N'Archive Dashboard', NULL, N'/pages/archivedashboard/crewQuery', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (222, N'Passenger Query', N'PassengerQuery', 10, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 213, N'Archive Dashboard', NULL, N'/pages/archivedashboard/passengerquery', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (223, N'Cargo Query', N'CargoQuery', 11, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 213, N'Archive Dashboard', NULL, N'/pages/archivedashboard/cargoquery', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (224, N'Media Query', N'MediaQuery', 12, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 213, N'Archive Dashboard', NULL, N'/pages/archivedashboard/mediaquery', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (225, N'Future Travel Query', N'FutureTravelQuery', 13, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 213, N'Archive Dashboard', NULL, N'/pages/archivedashboard/futuretravelquery', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (226, N'General Update Query', N'GeneralUpdateQuery', 14, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 213, N'Archive Dashboard', NULL, N'/pages/archivedashboard/generalupdatequery', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (227, N'Situational Updates Query', N'SituationalUpdatesQuery', 15, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 213, N'Archive Dashboard', NULL, N'/pages/archivedashboard/situationalupdatesquery', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (228, N'Customer Dissatisfaction Query', N'CustomerDissatisfactionQuery', 16, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 213, N'Archive Dashboard', NULL, N'/pages/archivedashboard/customerdissatisfactionquery', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (229, N'Broadcast Messages', N'BroadcastMessage', 5, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 213, N'Archive Dashboard', NULL, N'/pages/archivedashboard/broadcast', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (230, N'Spiel', N'spiel', 13, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 123, N'Master Data Management', NULL, N'/pages/masterdata/spiel', 0, 0, N'Tab')
GO
INSERT [ers].[Page] ([PageId], [PageName], [PageCode], [SortOrder], [ActiveFlag], [CreatedBy], [CreatedOn], [ParentPageId], [ModuleName], [ID], [URL], [Selected], [Hidden], [Type]) VALUES (231, N'Ground Victims', N'GroundVictims', 17, 1, 1, CAST(N'2016-04-10 13:50:07.573' AS DateTime), 213, N'Archive Dashboard', NULL, N'/pages/archivedashboard/groundmembers', 0, 0, N'Tab')
GO
SET IDENTITY_INSERT [ers].[Page] OFF
GO
