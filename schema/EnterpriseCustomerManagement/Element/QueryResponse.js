var Modeler = require("../Modeler.js");
var className = 'ElementQueryResponse';

var ElementQueryResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QueryResponse: {
      type: "TypeQueryResponseType",
      wsdlDefinition: {
        name: "QueryResponse",
        type: "QueryResponseType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  QueryResponse: {
      type: "TypeQueryResponseType",
      wsdlDefinition: {
        name: "QueryResponse",
        type: "QueryResponseType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementQueryResponse;
Modeler.register(ElementQueryResponse, "ElementQueryResponse");
