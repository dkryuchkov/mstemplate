var Modeler = require("../Modeler.js");
var className = 'ElementCreateResponse';

var ElementCreateResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreateResponse: {
      type: "TypeCreateResponseType",
      wsdlDefinition: {
        name: "CreateResponse",
        type: "CreateResponseType",
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
	  CreateResponse: {
      type: "TypeCreateResponseType",
      wsdlDefinition: {
        name: "CreateResponse",
        type: "CreateResponseType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateResponse;
Modeler.register(ElementCreateResponse, "ElementCreateResponse");
