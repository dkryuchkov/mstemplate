module.exports = {
  create_input: `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"  xmlns:xacml-context="urn:oasis:names:tc:xacml:2.0:context:schema:cd:04" xmlns:wsa="http://schemas.xmlsoap.org/ws/2003/03/addressing" xmlns:WL5G3N2="http://xmlns.oracle.com/EnterpriseObjects/Core/Common/V2" xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" xmlns:WL5G3N1="http://xmlns.oracle.com/EnterpriseObjects/Core/EBO/CustomerParty/V2" xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2">
	<soap:Body>
		<WL5G3N1:SyncCustomerPartyListEBM>
			<WL5G3N2:EBMHeader>
				<WL5G3N2:VerbCode>Upsert</WL5G3N2:VerbCode>
				<WL5G3N2:Sender>
					<WL5G3N2:ID>NABOne</WL5G3N2:ID>
					<WL5G3N2:UserID>SIT4WMQ3</WL5G3N2:UserID>
					<WL5G3N2:UserRole>BANKER</WL5G3N2:UserRole>
					<WL5G3N2:ESBHeaderExtension>
						<WL5G3N2:Name>Channel</WL5G3N2:Name>
						<WL5G3N2:Value>BRANCH</WL5G3N2:Value>
					</WL5G3N2:ESBHeaderExtension>
					<WL5G3N2:ESBHeaderExtension>
						<WL5G3N2:Name>TargetUnit</WL5G3N2:Name>
						<WL5G3N2:Value>BUSINESS BANKING</WL5G3N2:Value>
					</WL5G3N2:ESBHeaderExtension>
					<WL5G3N2:ESBHeaderExtension>
						<WL5G3N2:Name>Brand</WL5G3N2:Name>
						<WL5G3N2:Value>NAB</WL5G3N2:Value>
					</WL5G3N2:ESBHeaderExtension>
				</WL5G3N2:Sender>
				<WL5G3N2:Target>
					<WL5G3N2:ID>OCH</WL5G3N2:ID>
					<WL5G3N2:ServiceName>PersonService_Upsert</WL5G3N2:ServiceName>
				</WL5G3N2:Target>
				<WL5G3N2:EBMTracking>
					<WL5G3N2:ExecutionUnitID>c6503a48-1f40-4e94-861f-05a094b12e7c</WL5G3N2:ExecutionUnitID>
				</WL5G3N2:EBMTracking>
			</WL5G3N2:EBMHeader>
			<WL5G3N1:DataArea>
				<WL5G3N1:SyncCustomerPartyList>
					<WL5G3N2:Identification>
						<WL5G3N2:ContextID>IND</WL5G3N2:ContextID>
					</WL5G3N2:Identification>
					<WL5G3N2:PartyLocation>
						<WL5G3N2:LocationReference>
							<WL5G3N2:Address>
								<WL5G3N2:LineOne>Lot 56</WL5G3N2:LineOne>
								<WL5G3N2:LineTwo>601</WL5G3N2:LineTwo>
								<WL5G3N2:LineThree>L 6</WL5G3N2:LineThree>
								<WL5G3N2:LineFour>Test P3</WL5G3N2:LineFour>
								<WL5G3N2:LineFive>APT</WL5G3N2:LineFive>
								<WL5G3N2:LineSix>55</WL5G3N2:LineSix>
								<WL5G3N2:LineSeven>Bourke</WL5G3N2:LineSeven>
								<WL5G3N2:LineEight>ST</WL5G3N2:LineEight>
								<WL5G3N2:LineNine>CN</WL5G3N2:LineNine>
								<WL5G3N2:CityName>DOCKLANDS</WL5G3N2:CityName>
								<WL5G3N2:StateName>VIC</WL5G3N2:StateName>
								<WL5G3N2:CountryCode>AU</WL5G3N2:CountryCode>
								<WL5G3N2:PostalCode>3008</WL5G3N2:PostalCode>
								<WL5G3N2:LongPostalCode>99</WL5G3N2:LongPostalCode>
								<WL5G3N2:Custom>
									<corecomcust:CreatedSystem>NABOne</corecomcust:CreatedSystem>
									<corecomcust:CreatedUser>SIT4WMQ3</corecomcust:CreatedUser>
									<corecomcust:LastUpdatedUser>SIT4WMQ3</corecomcust:LastUpdatedUser>
									<corecomcust:Occupancy>Boarding</corecomcust:Occupancy>
									<corecomcust:OrganizationName>08</corecomcust:OrganizationName>
									<corecomcust:RelationshipType>HOM</corecomcust:RelationshipType>
									<corecomcust:StartDate>2018-01-01</corecomcust:StartDate>
									<corecomcust:Type>HOM</corecomcust:Type>
									<corecomcust:UpdatedSystem>NABOne</corecomcust:UpdatedSystem>
									<corecomcust:IsOBPAddress>Y</corecomcust:IsOBPAddress>
								</WL5G3N2:Custom>
							</WL5G3N2:Address>
						</WL5G3N2:LocationReference>
					</WL5G3N2:PartyLocation>
					<WL5G3N2:PartyContact>
						<WL5G3N2:Contact>
							<WL5G3N2:ContactPhoneCommunication>
								<WL5G3N2:PhoneCommunication>
									<WL5G3N2:UseCode>FLW</WL5G3N2:UseCode>
									<WL5G3N2:TypeCode>FLL</WL5G3N2:TypeCode>
									<WL5G3N2:CountryCode>61</WL5G3N2:CountryCode>
									<WL5G3N2:LocalNumber>423009123</WL5G3N2:LocalNumber>
								</WL5G3N2:PhoneCommunication>
								<WL5G3N2:Custom>
									<corecomcust:CreatedSystem>NABOne</corecomcust:CreatedSystem>
									<corecomcust:CreatedUser>SIT4WMQ3</corecomcust:CreatedUser>
									<corecomcust:ContactPoint>FLL</corecomcust:ContactPoint>
									<corecomcust:LastUpdatedSystem>NABOne</corecomcust:LastUpdatedSystem>
									<corecomcust:LastUpdatedUser>SIT4WMQ3</corecomcust:LastUpdatedUser>
									<corecomcust:OrganizationName>08</corecomcust:OrganizationName>
									<corecomcust:EffectiveStartDate>2017-01-01</corecomcust:EffectiveStartDate>
									<corecomcust:Purpose>COMM</corecomcust:Purpose>
									<corecomcust:ConcatenatedNumber>61423009123</corecomcust:ConcatenatedNumber>
								</WL5G3N2:Custom>
							</WL5G3N2:ContactPhoneCommunication>
							<WL5G3N2:ContactEmailCommunication>
								<WL5G3N2:EmailCommunication>
									<WL5G3N2:URI>work@nab.com.au</WL5G3N2:URI>
									<WL5G3N2:UseCode>WRK</WL5G3N2:UseCode>
									<WL5G3N2:TypeCode>SI</WL5G3N2:TypeCode>
								</WL5G3N2:EmailCommunication>
								<WL5G3N2:Custom>
									<corecomcust:CreatedSystem>NABOne</corecomcust:CreatedSystem>
									<corecomcust:CreatedUser>SIT4WMQ3</corecomcust:CreatedUser>
									<corecomcust:ContactPoint>SI</corecomcust:ContactPoint>
									<corecomcust:LastUpdatedSystem>NABOne</corecomcust:LastUpdatedSystem>
									<corecomcust:LastUpdatedUser>SIT4WMQ3</corecomcust:LastUpdatedUser>
									<corecomcust:OrganizationName>08</corecomcust:OrganizationName>
									<corecomcust:EffectiveStartDate>2018-10-01</corecomcust:EffectiveStartDate>
									<corecomcust:Purpose>COMM</corecomcust:Purpose>
								</WL5G3N2:Custom>
							</WL5G3N2:ContactEmailCommunication>
						</WL5G3N2:Contact>
					</WL5G3N2:PartyContact>
					<WL5G3N2:Person>
						<WL5G3N2:GenderCode>MAL</WL5G3N2:GenderCode>
						<WL5G3N2:BirthDateTime>
							<WL5G3N2:DateTimeType>01/01/1977</WL5G3N2:DateTimeType>
						</WL5G3N2:BirthDateTime>
						<WL5G3N2:PersonName>
							<WL5G3N2:FirstName>Jo</WL5G3N2:FirstName>
							<WL5G3N2:MiddleName>Mr</WL5G3N2:MiddleName>
							<WL5G3N2:FamilyName>Bloggs</WL5G3N2:FamilyName>
							<WL5G3N2:Title>18</WL5G3N2:Title>
						</WL5G3N2:PersonName>
						<WL5G3N2:Custom>
							<corecomcust:BirthDate>01/01/1977</corecomcust:BirthDate>
							<corecomcust:Industry>30</corecomcust:Industry>
							<corecomcust:OccupationCode>O799215</corecomcust:OccupationCode>
							<corecomcust:FATCAUSCitizen>N</corecomcust:FATCAUSCitizen>
						</WL5G3N2:Custom>
					</WL5G3N2:Person>
					<WL5G3N1:TypeCode>IND</WL5G3N1:TypeCode>
					<WL5G3N1:Custom>
						<corecustomerpartycust:CreatedSystem>NABOne</corecustomerpartycust:CreatedSystem>
						<corecustomerpartycust:CreatedUser>SIT4WMQ3</corecustomerpartycust:CreatedUser>
						<corecustomerpartycust:LastUpdatedSys>NABOne</corecustomerpartycust:LastUpdatedSys>
						<corecustomerpartycust:LastUpdatedUser>SIT4WMQ3</corecustomerpartycust:LastUpdatedUser>
						<corecustomerpartycust:NonResidentIndicator>N</corecustomerpartycust:NonResidentIndicator>
						<corecustomerpartycust:Organization>NAB</corecustomerpartycust:Organization>
						<corecustomerpartycust:PartyState>51</corecustomerpartycust:PartyState>
						<corecustomerpartycust:PartyRoles>
							<corecustomerpartycust:PartyRole>
								<corecustomerpartycust:OrganizationName>08</corecustomerpartycust:OrganizationName>
								<corecustomerpartycust:RoleCode>51</corecustomerpartycust:RoleCode>
							</corecustomerpartycust:PartyRole>
						</corecustomerpartycust:PartyRoles>
						<corecustomerpartycust:Brand>NAB</corecustomerpartycust:Brand>
						<corecustomerpartycust:ListOfContactPosition>
							<corecustomerpartycust:ContactPosition>
								<corecustomerpartycust:Division>Siebel Administration</corecustomerpartycust:Division>
								<corecustomerpartycust:Position>409649275</corecustomerpartycust:Position>
							</corecustomerpartycust:ContactPosition>
						</corecustomerpartycust:ListOfContactPosition>
					</WL5G3N1:Custom>
				</WL5G3N1:SyncCustomerPartyList>
			</WL5G3N1:DataArea>
		</WL5G3N1:SyncCustomerPartyListEBM>
	</soap:Body>
</soap:Envelope>`,
  search_input: `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"  xmlns:xacml-context="urn:oasis:names:tc:xacml:2.0:context:schema:cd:04" xmlns:wsa="http://schemas.xmlsoap.org/ws/2003/03/addressing" xmlns:WL5G3N2="http://xmlns.oracle.com/EnterpriseObjects/Core/Common/V2" xmlns:corecomcust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/Common/V2" xmlns:WL5G3N1="http://xmlns.oracle.com/EnterpriseObjects/Core/EBO/CustomerParty/V2" xmlns:corecustomerpartycust="http://xmlns.oracle.com/EnterpriseObjects/Core/Custom/EBO/CustomerParty/V2">
	<soap:Body>
		<WL5G3N1:QueryCustomerPartyListEBM>
			<WL5G3N2:EBMHeader>
				<WL5G3N2:VerbCode>Query</WL5G3N2:VerbCode>
				<WL5G3N2:Sender>
					<WL5G3N2:ID>NABOne</WL5G3N2:ID>
					<WL5G3N2:UserID>SIT4WMQ3</WL5G3N2:UserID>
					<WL5G3N2:UserRole>BANKER</WL5G3N2:UserRole>
					<WL5G3N2:ESBHeaderExtension>
						<WL5G3N2:Name>Channel</WL5G3N2:Name>
						<WL5G3N2:Value>BRANCH</WL5G3N2:Value>
					</WL5G3N2:ESBHeaderExtension>
					<WL5G3N2:ESBHeaderExtension>
						<WL5G3N2:Name>TargetUnit</WL5G3N2:Name>
						<WL5G3N2:Value>BUSINESS BANKING</WL5G3N2:Value>
					</WL5G3N2:ESBHeaderExtension>
					<WL5G3N2:ESBHeaderExtension>
						<WL5G3N2:Name>Brand</WL5G3N2:Name>
						<WL5G3N2:Value>NAB</WL5G3N2:Value>
					</WL5G3N2:ESBHeaderExtension>
				</WL5G3N2:Sender>
				<WL5G3N2:Target>
					<WL5G3N2:ID>OCH</WL5G3N2:ID>
					<WL5G3N2:ServiceName>Search</WL5G3N2:ServiceName>
				</WL5G3N2:Target>
				<WL5G3N2:EBMTracking>
					<WL5G3N2:ExecutionUnitID>c6503a48-1f40-4e94-861f-05a094b12e7c</WL5G3N2:ExecutionUnitID>
				</WL5G3N2:EBMTracking>
			</WL5G3N2:EBMHeader>
			<WL5G3N1:DataArea>
				<WL5G3N1:Query>
					<WL5G3N2:QueryCriteria>
						<WL5G3N2:QueryExpression>
							<WL5G3N2:ValueExpression>
								<WL5G3N2:ElementPath>CustomerType</WL5G3N2:ElementPath>
								<WL5G3N2:Value>IND</WL5G3N2:Value>
							</WL5G3N2:ValueExpression>
							<WL5G3N2:ValueExpression>
								<WL5G3N2:ElementPath>Name</WL5G3N2:ElementPath>
								<WL5G3N2:Value>GRAEME MURPHY</WL5G3N2:Value>
							</WL5G3N2:ValueExpression>
							<WL5G3N2:ValueExpression>
								<WL5G3N2:ElementPath>Brand</WL5G3N2:ElementPath>
								<WL5G3N2:Value>NAB</WL5G3N2:Value>
							</WL5G3N2:ValueExpression>
							<WL5G3N2:ValueExpression>
								<WL5G3N2:ElementPath>MobilePhone</WL5G3N2:ElementPath>
								<WL5G3N2:Value>61423009123</WL5G3N2:Value>
							</WL5G3N2:ValueExpression>
							<WL5G3N2:ValueExpression>
								<WL5G3N2:ElementPath>BirthDate</WL5G3N2:ElementPath>
								<WL5G3N2:Value>06/24/1950</WL5G3N2:Value>
							</WL5G3N2:ValueExpression>
							<WL5G3N2:ValueExpression>
								<WL5G3N2:ElementPath>EmailAddress</WL5G3N2:ElementPath>
								<WL5G3N2:Value>sasdas@jandjsa.com</WL5G3N2:Value>
							</WL5G3N2:ValueExpression>
							<WL5G3N2:ValueExpression>
								<WL5G3N2:ElementPath>IsBrandAgnostic</WL5G3N2:ElementPath>
								<WL5G3N2:Value>N</WL5G3N2:Value>
							</WL5G3N2:ValueExpression>
							<WL5G3N2:ValueExpression>
								<WL5G3N2:ElementPath>IsSearch</WL5G3N2:ElementPath>
								<WL5G3N2:Value>N</WL5G3N2:Value>
							</WL5G3N2:ValueExpression>
							<WL5G3N2:ValueExpression>
								<WL5G3N2:ElementPath>MatchScoreThreshold</WL5G3N2:ElementPath>
								<WL5G3N2:Value>10</WL5G3N2:Value>
							</WL5G3N2:ValueExpression>
						</WL5G3N2:QueryExpression>
						<WL5G3N2:SortElement>Name</WL5G3N2:SortElement>
					</WL5G3N2:QueryCriteria>
				</WL5G3N1:Query>
			</WL5G3N1:DataArea>
		</WL5G3N1:QueryCustomerPartyListEBM>
	</soap:Body>
</soap:Envelope>`
}
