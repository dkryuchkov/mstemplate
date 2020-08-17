<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
	<soapenv:Body>
		<soapenv:Fault>
			<faultcode>soapenv:Server</faultcode>
			<faultstring>BEA-382500: OSB Service Callout action received SOAP Fault response</faultstring>
			<detail>
				<con:fault xmlns:con="http://www.bea.com/wli/sb/context">
					<con:errorCode>BEA-382500</con:errorCode>
					<con:reason>OSB Service Callout action received SOAP Fault response</con:reason>
					<con:details>
						<con1:ReceivedFaultDetail xmlns:con1="http://www.bea.com/wli/sb/stages/transform/config">
							<con1:faultcode>soapenv:Server</con1:faultcode>
							<con1:faultstring>
								<![CDATA[<detail xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"><siebelf:siebdetail xmlns:siebelf="http://www.siebel.com/ws/fault"><siebelf:logfilename>EAIObjMgr_enu_0024_25166341.log</siebelf:logfilename><siebelf:errorstack><siebelf:error><siebelf:errorcode>SBL-BPR-00162</siebelf:errorcode><siebelf:errorsymbol/><siebelf:errormsg>Error invoking service 'UCM Transaction Manager', method 'SOAPExecute' at step 'Transaction Manager'.(SBL-BPR-00162)</siebelf:errormsg></siebelf:error><siebelf:error><siebelf:errorcode>SBL-IAI-00519</siebelf:errorcode><siebelf:errorsymbol/><siebelf:errormsg>CIF Transaction Mgr Failed to find External System Id in the SOAP message.(SBL-IAI-00519)</siebelf:errormsg></siebelf:error></siebelf:errorstack></siebelf:siebdetail></detail>]]>
							</con1:faultstring>
							<con1:detail xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
								<![CDATA[<detail xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"><siebelf:siebdetail xmlns:siebelf="http://www.siebel.com/ws/fault"><siebelf:logfilename>EAIObjMgr_enu_0024_25166341.log</siebelf:logfilename><siebelf:errorstack><siebelf:error><siebelf:errorcode>SBL-BPR-00162</siebelf:errorcode><siebelf:errorsymbol/><siebelf:errormsg>Error invoking service 'UCM Transaction Manager', method 'SOAPExecute' at step 'Transaction Manager'.(SBL-BPR-00162)</siebelf:errormsg></siebelf:error><siebelf:error><siebelf:errorcode>SBL-IAI-00519</siebelf:errorcode><siebelf:errorsymbol/><siebelf:errormsg>CIF Transaction Mgr Failed to find External System Id in the SOAP message.(SBL-IAI-00519)</siebelf:errormsg></siebelf:error></siebelf:errorstack></siebelf:siebdetail></detail>]]>
							</con1:detail>
						</con1:ReceivedFaultDetail>
					</con:details>
					<con:location>
						<con:node>CustomerSync</con:node>
						<con:pipeline>CustomerSync_response</con:pipeline>
						<con:stage>SyncPersonResponse</con:stage>
						<con:path>response-pipeline</con:path>
					</con:location>
				</con:fault>
			</detail>
		</soapenv:Fault>
	</soapenv:Body>
</soapenv:Envelope>
