<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:v2="http://xmlns.oracle.com/EnterpriseObjects/Core/EBO/CustomerParty/V2"
 xmlns:v21="http://xmlns.oracle.com/EnterpriseObjects/Core/Common/V2" xmlns:add="http://schemas.xmlsoap.org/ws/2003/03/addressing"
 xmlns:urn="urn:oasis:names:tc:xacml:2.0:context:schema:cd:04" xmlns:v22="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2"
 xmlns:v23="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2">
	<soapenv:Header />
	<SOAP-ENV:Body xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
		<ns0:SyncCustomerPartyListResponseEBM xmlns:sdf="http://www.oracle.com/XSL/Transform/java/java.text.SimpleDateFormat"
		 xmlns:date="http://www.oracle.com/XSL/Transform/java/java.util.Date" xmlns:java="http://xml.apache.org/xslt/java"
		 xmlns:ns0="http://xmlns.oracle.com/EnterpriseObjects/Core/EBO/CustomerParty/V2">
			<corecom:EBMHeader xmlns:corecom="http://xmlns.oracle.com/EnterpriseObjects/Core/Common/V2">
				<corecom:VerbCode>Upsert</corecom:VerbCode>
				<corecom:Sender>
					<corecom:ID>NABOne</corecom:ID>
				</corecom:Sender>
				<corecom:EBMTracking>
					<corecom:ExecutionUnitID>c6503a48-1f40-4e94-861f-05a094b12e7c</corecom:ExecutionUnitID>
				</corecom:EBMTracking>
			</corecom:EBMHeader>
			<ns0:DataArea>
				<ns0:SyncCustomerPartyListResponse>
					<corecom:Identification xmlns:corecom="http://xmlns.oracle.com/EnterpriseObjects/Core/Common/V2">
						<corecom:BusinessComponentID>400082533997</corecom:BusinessComponentID>
						<corecom:ID>1-MCN2I4</corecom:ID>
						<corecom:ApplicationObjectKey>
							<corecom:ID>400082533997</corecom:ID>
						</corecom:ApplicationObjectKey>
					</corecom:Identification>
					<corecom:PartyLocation xmlns:corecom="http://xmlns.oracle.com/EnterpriseObjects/Core/Common/V2">
						<corecom:LocationReference>
							<corecom:Address>
								<corecom:Identification>
									<corecom:ID>1-MCN2IA</corecom:ID>
								</corecom:Identification>
								<corecom:LineOne>Lot 56</corecom:LineOne>
								<corecom:LineTwo>601</corecom:LineTwo>
								<corecom:LineThree>L 6</corecom:LineThree>
								<corecom:LineFour>Test P3</corecom:LineFour>
								<corecom:LineFive>APT</corecom:LineFive>
								<corecom:LineSix>55</corecom:LineSix>
								<corecom:LineSeven>Bourke</corecom:LineSeven>
								<corecom:LineEight>ST</corecom:LineEight>
								<corecom:LineNine>CN</corecom:LineNine>
								<corecom:CityName>DOCKLANDS</corecom:CityName>
								<corecom:StateName>VIC</corecom:StateName>
								<corecom:CountryCode>AU</corecom:CountryCode>
								<corecom:DeliveryPointBarCode />
								<corecom:DeliveryPointTypeCode />
								<corecom:CareOf />
								<corecom:PostalCode>3008</corecom:PostalCode>
								<corecom:LongPostalCode>99</corecom:LongPostalCode>
								<corecom:Custom>
									<corecomcust:CreatedDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">01/11/2019
										16:51:42</corecomcust:CreatedDate>
									<corecomcust:CreatedSystem xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">NABOne</corecomcust:CreatedSystem>
									<corecomcust:CreatedUser xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">SIT4WMQ3</corecomcust:CreatedUser>
									<corecomcust:DeletedUser xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:EndDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:LastUpdated xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">01/11/2019
										16:51:42</corecomcust:LastUpdated>
									<corecomcust:LastUpdatedUser xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">SIT4WMQ3</corecomcust:LastUpdatedUser>
									<corecomcust:LastValidationDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:MailingStatus xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">A03</corecomcust:MailingStatus>
									<corecomcust:Occupancy xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">BRD</corecomcust:Occupancy>
									<corecomcust:OrganizationName xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">08</corecomcust:OrganizationName>
									<corecomcust:PrimaryFlag xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:RecordDeletedDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:RecordStatus xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">Active</corecomcust:RecordStatus>
									<corecomcust:RelationshipType xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">HOM</corecomcust:RelationshipType>
									<corecomcust:Search xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">Test
										P3 Lot 56 L 6 601/55 Bourke ST CN, DOCKLANDS, VIC, 3008, AU</corecomcust:Search>
									<corecomcust:StartDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">01/01/2018</corecomcust:StartDate>
									<corecomcust:Type xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:UpdatedSystem xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">NABOne</corecomcust:UpdatedSystem>
									<corecomcust:ValidationStatus xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">03</corecomcust:ValidationStatus>
									<corecomcust:ConcatenatedAddress1 xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">Test
										P3 Lot 56 L 6 601/55 Bourke ST CN</corecomcust:ConcatenatedAddress1>
									<corecomcust:ConcatenatedAddress2 xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">DOCKLANDS,
										VIC, 3008, AU</corecomcust:ConcatenatedAddress2>
									<corecomcust:PrintAddressLine1 xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:PrintAddressLine2 xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:PrintAddressLine3 xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:StopMail xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:StopMailReason xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:HoldMail xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:HoldMailStartDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:HoldMailEndDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:LivingSinceDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:SourceLastModifiedDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
								</corecom:Custom>
							</corecom:Address>
						</corecom:LocationReference>
					</corecom:PartyLocation>
					<corecom:PartyLocation xmlns:corecom="http://xmlns.oracle.com/EnterpriseObjects/Core/Common/V2">
						<corecom:LocationReference>
							<corecom:Address>
								<corecom:Identification>
									<corecom:ID>1-MCN2IB</corecom:ID>
								</corecom:Identification>
								<corecom:LineOne>Lot 56</corecom:LineOne>
								<corecom:LineTwo>601</corecom:LineTwo>
								<corecom:LineThree>L 6</corecom:LineThree>
								<corecom:LineFour>Test P3</corecom:LineFour>
								<corecom:LineFive>APT</corecom:LineFive>
								<corecom:LineSix>55</corecom:LineSix>
								<corecom:LineSeven>Bourke</corecom:LineSeven>
								<corecom:LineEight>ST</corecom:LineEight>
								<corecom:LineNine>CN</corecom:LineNine>
								<corecom:CityName>DOCKLANDS</corecom:CityName>
								<corecom:StateName>VIC</corecom:StateName>
								<corecom:CountryCode>AU</corecom:CountryCode>
								<corecom:DeliveryPointBarCode />
								<corecom:DeliveryPointTypeCode />
								<corecom:CareOf />
								<corecom:PostalCode>3008</corecom:PostalCode>
								<corecom:LongPostalCode>99</corecom:LongPostalCode>
								<corecom:Custom>
									<corecomcust:CreatedDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">01/11/2019
										16:51:42</corecomcust:CreatedDate>
									<corecomcust:CreatedSystem xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">NABOne</corecomcust:CreatedSystem>
									<corecomcust:CreatedUser xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">SIT4WMQ3</corecomcust:CreatedUser>
									<corecomcust:DeletedUser xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:EndDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:LastUpdated xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">01/11/2019
										16:51:42</corecomcust:LastUpdated>
									<corecomcust:LastUpdatedUser xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">SIT4WMQ3</corecomcust:LastUpdatedUser>
									<corecomcust:LastValidationDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:MailingStatus xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">A03</corecomcust:MailingStatus>
									<corecomcust:Occupancy xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">BRD</corecomcust:Occupancy>
									<corecomcust:OrganizationName xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">08</corecomcust:OrganizationName>
									<corecomcust:PrimaryFlag xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:RecordDeletedDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:RecordStatus xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">Active</corecomcust:RecordStatus>
									<corecomcust:RelationshipType xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">COM</corecomcust:RelationshipType>
									<corecomcust:Search xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">Test
										P3 Lot 56 L 6 601/55 Bourke ST CN, DOCKLANDS, VIC, 3008, AU</corecomcust:Search>
									<corecomcust:StartDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">01/01/2018</corecomcust:StartDate>
									<corecomcust:Type xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:UpdatedSystem xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">NABOne</corecomcust:UpdatedSystem>
									<corecomcust:ValidationStatus xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">03</corecomcust:ValidationStatus>
									<corecomcust:ConcatenatedAddress1 xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">Test
										P3 Lot 56 L 6 601/55 Bourke ST CN</corecomcust:ConcatenatedAddress1>
									<corecomcust:ConcatenatedAddress2 xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">DOCKLANDS,
										VIC, 3008, AU</corecomcust:ConcatenatedAddress2>
									<corecomcust:PrintAddressLine1 xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:PrintAddressLine2 xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:PrintAddressLine3 xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:StopMail xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:StopMailReason xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:HoldMail xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:HoldMailStartDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:HoldMailEndDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:LivingSinceDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:SourceLastModifiedDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
								</corecom:Custom>
							</corecom:Address>
						</corecom:LocationReference>
					</corecom:PartyLocation>
					<corecom:PartyContact xmlns:corecom="http://xmlns.oracle.com/EnterpriseObjects/Core/Common/V2">
						<corecom:Contact>
							<corecom:ContactPhoneCommunication>
								<corecom:Identification>
									<corecom:ID>1-MCN2I8</corecom:ID>
								</corecom:Identification>
								<corecom:PhoneCommunication>
									<corecom:CountryCode>61</corecom:CountryCode>
									<corecom:AreaCode />
									<corecom:LocalNumber>423009123</corecom:LocalNumber>
									<corecom:UseCode>FLW</corecom:UseCode>
									<corecom:TypeCode>FLL</corecom:TypeCode>
									<corecom:Preference>
										<corecom:PreferredIndicator>false</corecom:PreferredIndicator>
									</corecom:Preference>
								</corecom:PhoneCommunication>
								<corecom:Status>
									<corecom:Code>P01</corecom:Code>
								</corecom:Status>
								<corecom:Custom>
									<corecomcust:CreatedDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">01/11/2019
										16:51:42</corecomcust:CreatedDate>
									<corecomcust:CreatedSystem xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">NABOne</corecomcust:CreatedSystem>
									<corecomcust:CreatedUser xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">SIT4WMQ3</corecomcust:CreatedUser>
									<corecomcust:ConcatenatedNumber xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">61423009123</corecomcust:ConcatenatedNumber>
									<corecomcust:DeletedDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:DeletedUser xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:EffectiveEndDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:EffectiveStartDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">01/01/2018</corecomcust:EffectiveStartDate>
									<corecomcust:LastUpdated xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">01/11/2019
										16:51:42</corecomcust:LastUpdated>
									<corecomcust:LastUpdatedSystem xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">NABOne</corecomcust:LastUpdatedSystem>
									<corecomcust:LastUpdatedUser xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">SIT4WMQ3</corecomcust:LastUpdatedUser>
									<corecomcust:OrganizationName xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">08</corecomcust:OrganizationName>
									<corecomcust:Purpose xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">COMM</corecomcust:Purpose>
									<corecomcust:RecordStatus xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">Active</corecomcust:RecordStatus>
									<corecomcust:SMSAuthorisationFlag xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">N</corecomcust:SMSAuthorisationFlag>
									<corecomcust:SourceLastModifiedDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
								</corecom:Custom>
							</corecom:ContactPhoneCommunication>
							<corecom:ContactEmailCommunication>
								<corecom:Identification>
									<corecom:ID>1-MCN2I7</corecom:ID>
								</corecom:Identification>
								<corecom:EmailCommunication>
									<corecom:URI>work@nab.com.au</corecom:URI>
									<corecom:UseCode>WRK</corecom:UseCode>
									<corecom:Preference>
										<corecom:PreferredIndicator>false</corecom:PreferredIndicator>
									</corecom:Preference>
								</corecom:EmailCommunication>
								<corecom:Status>
									<corecom:Code>E03</corecom:Code>
								</corecom:Status>
								<corecom:Custom>
									<corecomcust:ContactPoint xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">ELA</corecomcust:ContactPoint>
									<corecomcust:CreatedDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">01/11/2019
										16:51:42</corecomcust:CreatedDate>
									<corecomcust:CreatedSystem xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">NABOne</corecomcust:CreatedSystem>
									<corecomcust:CreatedUser xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">SIT4WMQ3</corecomcust:CreatedUser>
									<corecomcust:EffectiveEndDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:EffectiveStartDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">10/01/2018</corecomcust:EffectiveStartDate>
									<corecomcust:DeletedDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:DeletedUser xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
									<corecomcust:LastUpdated xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">01/11/2019
										16:51:42</corecomcust:LastUpdated>
									<corecomcust:LastUpdatedSystem xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">NABOne</corecomcust:LastUpdatedSystem>
									<corecomcust:LastUpdatedUser xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">SIT4WMQ3</corecomcust:LastUpdatedUser>
									<corecomcust:OrganizationName xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">08</corecomcust:OrganizationName>
									<corecomcust:Purpose xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">COMM</corecomcust:Purpose>
									<corecomcust:RecordStatus xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">Active</corecomcust:RecordStatus>
								</corecom:Custom>
							</corecom:ContactEmailCommunication>
							<corecom:Custom>
								<corecomcust:ListOfContactNames xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">
									<corecomcust:ContactNames>
										<corecomcust:CreatedByExternalUser>SIT4WMQ3</corecomcust:CreatedByExternalUser>
										<corecomcust:CreatedBySystem>NABOne</corecomcust:CreatedBySystem>
										<corecomcust:CreatedDate>01/11/2019 16:51:42</corecomcust:CreatedDate>
										<corecomcust:FirstName>Jo</corecomcust:FirstName>
										<corecomcust:Id>1-MCN2I4</corecomcust:Id>
										<corecomcust:LastName>Bloggs</corecomcust:LastName>
										<corecomcust:LastUpdated>01/11/2019 16:51:42</corecomcust:LastUpdated>
										<corecomcust:LastUpdatedByExternalUser>SIT4WMQ3</corecomcust:LastUpdatedByExternalUser>
										<corecomcust:LastUpdatedBySystem>NABOne</corecomcust:LastUpdatedBySystem>
										<corecomcust:MailingName>Jo Bloggs</corecomcust:MailingName>
										<corecomcust:MiddleName>Mr</corecomcust:MiddleName>
										<corecomcust:MiddleName2 />
										<corecomcust:MiddleName3 />
										<corecomcust:MM>18</corecomcust:MM>
										<corecomcust:NameHonours />
										<corecomcust:NameType>LEG</corecomcust:NameType>
										<corecomcust:OrganizationName>08</corecomcust:OrganizationName>
										<corecomcust:Salutation />
										<corecomcust:Status>01</corecomcust:Status>
										<corecomcust:Suffix />
										<corecomcust:SourceLastModifiedDate />
									</corecomcust:ContactNames>
								</corecomcust:ListOfContactNames>
							</corecom:Custom>
						</corecom:Contact>
					</corecom:PartyContact>
					<corecom:Person xmlns:corecom="http://xmlns.oracle.com/EnterpriseObjects/Core/Common/V2">
						<corecom:GenderCode>MAL</corecom:GenderCode>
						<corecom:MaritalStatusCode />
						<corecom:NationalityCountryCode />
						<corecom:TaxPayerIdentificationNumber />
						<corecom:BirthPlace />
						<corecom:DeceasedIndicator />
						<corecom:TotalDependentCount />
						<corecom:PersonName>
							<corecom:FirstName>Jo</corecom:FirstName>
							<corecom:MiddleName>Mr</corecom:MiddleName>
							<corecom:FamilyName>Bloggs</corecom:FamilyName>
							<corecom:Title>18</corecom:Title>
							<corecom:Salutation />
							<corecom:Suffix />
						</corecom:PersonName>
						<corecom:Custom>
							<corecomcust:BirthDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">01/01/1977</corecomcust:BirthDate>
							<corecomcust:DeathDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:Domicile xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:Income xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:Industry xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">30</corecomcust:Industry>
							<corecomcust:MiddleNameTwo xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:MiddleNameThree xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:NameHonours xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:OccupationCode xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">799215</corecomcust:OccupationCode>
							<corecomcust:SecurityAnswer xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:SecurityQuestion xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:TaxNumberExemptionDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:UserDefQuestion xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:VisaStatus xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:NABCustomer xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">N</corecomcust:NABCustomer>
							<corecomcust:Comment xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:EmpFlg xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">N</corecomcust:EmpFlg>
							<corecomcust:FATCATaxClassification xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:FATCAIdType xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:FATCAIdNumber xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:FATCAPassportNumber xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:FATCAAlienResidenceNumber xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:FATCAPassportCardNumber xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:FATCAEmployerIdentificationNumber xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:FATCAPhoneNumber xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:FATCABeneficialOwnerCategories xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:FATCAUSCitizen xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2">N</corecomcust:FATCAUSCitizen>
							<corecomcust:FATCAConflictingInformationReason xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:FATCAConflictingInformationReasonDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:FATCACuredDate xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:Newspaper xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:SourceCode xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
							<corecomcust:ISaverNEIRFlag xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" />
						</corecom:Custom>
					</corecom:Person>
					<ns0:TypeCode>IND</ns0:TypeCode>
					<ns0:TaxCode>01</ns0:TaxCode>
					<corecom:Status xmlns:corecom="http://xmlns.oracle.com/EnterpriseObjects/Core/Common/V2">
						<corecom:Code>A</corecom:Code>
					</corecom:Status>
					<ns0:CustomerPartyTaxExemption>
						<corecom:Identification xmlns:corecom="http://xmlns.oracle.com/EnterpriseObjects/Core/Common/V2">
							<corecom:ID />
						</corecom:Identification>
						<ns0:Custom />
					</ns0:CustomerPartyTaxExemption>
					<ns0:Custom>
						<corecustomerpartycust:CreatedDate xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2">01/11/2019
							16:51:42</corecustomerpartycust:CreatedDate>
						<corecustomerpartycust:CreatedSystem xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2">NABOne</corecustomerpartycust:CreatedSystem>
						<corecustomerpartycust:CreatedUser xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2">SIT4WMQ3</corecustomerpartycust:CreatedUser>
						<corecustomerpartycust:CustomerSince xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:DeactivationDate xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:EmergencyContact xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:GeneralNotes xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:LastUpdated xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2">01/11/2019
							16:51:42</corecustomerpartycust:LastUpdated>
						<corecustomerpartycust:LastUpdatedSys xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2">NABOne</corecustomerpartycust:LastUpdatedSys>
						<corecustomerpartycust:LastUpdatedUser xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2">SIT4WMQ3</corecustomerpartycust:LastUpdatedUser>
						<corecustomerpartycust:MediaCode xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:MigratedFlag xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2">N</corecustomerpartycust:MigratedFlag>
						<corecustomerpartycust:NonResidentIndicator xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2">N</corecustomerpartycust:NonResidentIndicator>
						<corecustomerpartycust:PartyClassification xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:PartyState xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2">51</corecustomerpartycust:PartyState>
						<corecustomerpartycust:PriorPartyClassification xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:PurgeDate xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:ReactivationDate xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:RetirementDate xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:ActiveStepRequired xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:VerificationID xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:IdentityVerificationDatetime xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:IdentityVerificationStage xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:IdentityVerificationStatus xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2">UNC</corecustomerpartycust:IdentityVerificationStatus>
						<corecustomerpartycust:TaxIDAppliesToAllAccounts xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2">N</corecustomerpartycust:TaxIDAppliesToAllAccounts>
						<corecustomerpartycust:OccupationCode xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2">799215</corecustomerpartycust:OccupationCode>
						<corecustomerpartycust:OccupationDescription xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2">Product
							Tester</corecustomerpartycust:OccupationDescription>
						<corecustomerpartycust:PartyRoles xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2">
							<corecustomerpartycust:PartyRole>
								<corecustomerpartycust:ID>1-MCN2ID</corecustomerpartycust:ID>
								<corecustomerpartycust:LastUpdated>01/11/2019 16:51:42</corecustomerpartycust:LastUpdated>
								<corecustomerpartycust:CreatedDate>01/11/2019 16:51:42</corecustomerpartycust:CreatedDate>
								<corecustomerpartycust:LastUpdatedUser />
								<corecustomerpartycust:CreatedUser />
								<corecustomerpartycust:LastUpdatedSystem />
								<corecustomerpartycust:CreatedSystem />
								<corecustomerpartycust:OrganizationName>08</corecustomerpartycust:OrganizationName>
								<corecustomerpartycust:RoleCode>51</corecustomerpartycust:RoleCode>
								<corecustomerpartycust:RoleType />
								<corecustomerpartycust:StartDate />
							</corecustomerpartycust:PartyRole>
						</corecustomerpartycust:PartyRoles>
						<corecustomerpartycust:DisputeDenial xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:ConsentDate xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:SecPurpose xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:SegmentCode xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:ShareInfo xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:ProfileOriginationDate xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:SourceLastModifiedDate xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:NABStaff xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2">N</corecustomerpartycust:NABStaff>
						<corecustomerpartycust:OriginatingSystem xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2">NXG</corecustomerpartycust:OriginatingSystem>
						<corecustomerpartycust:LegacyId xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:ConsentVerified xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:Platform xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:ValueGroup xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:GoldenId xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:Brand xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2">NAB</corecustomerpartycust:Brand>
						<corecustomerpartycust:eKYCConsentFlag xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:eKYCConsentDateTime xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:eKYCConsentBy xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2" />
						<corecustomerpartycust:ListOfContactPosition xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2">
							<corecustomerpartycust:ContactPosition>
								<corecustomerpartycust:PositionId>1-195Z8-1</corecustomerpartycust:PositionId>
								<corecustomerpartycust:PositionIntegrationId />
								<corecustomerpartycust:Division>Siebel Administration</corecustomerpartycust:Division>
								<corecustomerpartycust:IsPrimaryMVG>Y</corecustomerpartycust:IsPrimaryMVG>
								<corecustomerpartycust:SalesRep />
								<corecustomerpartycust:Position>409649275</corecustomerpartycust:Position>
							</corecustomerpartycust:ContactPosition>
							<corecustomerpartycust:ContactPosition>
								<corecustomerpartycust:PositionId>0-5220</corecustomerpartycust:PositionId>
								<corecustomerpartycust:PositionIntegrationId />
								<corecustomerpartycust:Division>Siebel Administration</corecustomerpartycust:Division>
								<corecustomerpartycust:IsPrimaryMVG>N</corecustomerpartycust:IsPrimaryMVG>
								<corecustomerpartycust:SalesRep>SADMIN</corecustomerpartycust:SalesRep>
								<corecustomerpartycust:Position>Siebel Administrator</corecustomerpartycust:Position>
							</corecustomerpartycust:ContactPosition>
						</corecustomerpartycust:ListOfContactPosition>
						<corecustomerpartycust:AMLInformation xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2">
							<corecustomerpartycust:OCDDCompletedDate />
							<corecustomerpartycust:OCDDCompletedBy />
							<corecustomerpartycust:OCDDCompletedChannel />
							<corecustomerpartycust:OCDDDueDate />
							<corecustomerpartycust:CustomerRiskRating />
						</corecustomerpartycust:AMLInformation>
						<corecustomerpartycust:CRS xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2">
							<corecustomerpartycust:CRSSelfCertificationFirstObtainedDate />
							<corecustomerpartycust:CRSSelfCertificationLastUpdatedBy />
							<corecustomerpartycust:CRSSelfCertificationLastUpdatedDate />
							<corecustomerpartycust:ResidentOfOtherCountryForTaxPurposes />
							<corecustomerpartycust:CRSSelfCertificationMethod />
							<corecustomerpartycust:CRSSelfCertificationChannel />
							<corecustomerpartycust:CRSCuredDate />
							<corecustomerpartycust:CRSConflictingReasonCode />
							<corecustomerpartycust:CRSConflictingReasonDate />
							<corecustomerpartycust:ListOfForeignTaxDetails />
						</corecustomerpartycust:CRS>
					</ns0:Custom>
				</ns0:SyncCustomerPartyListResponse>
			</ns0:DataArea>
		</ns0:SyncCustomerPartyListResponseEBM>
	</SOAP-ENV:Body>
</soapenv:Envelope>