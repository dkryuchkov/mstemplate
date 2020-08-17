var Modeler = require("../Modeler.js");
var className = 'TypeUpdateCustomerPartyListResponseEBMType';

var TypeUpdateCustomerPartyListResponseEBMType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EBMHeader: {
      type: "TypeEBMHeaderType",
      wsdlDefinition: {
        name: "WL5G3N2:EBMHeader",
        type: "EBMHeaderType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    versionID: {
      type: "TypeStringType",
      wsdlDefinition: {
        name: "versionID",
        type: "StringType",
        use: "optional",
        attribute: true,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    languageCode: {
      type: "TypeLanguageCodeType",
      wsdlDefinition: {
        default: "en-US",
        name: "languageCode",
        type: "LanguageCodeType",
        use: "optional",
        attribute: true,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DataArea: {
      type: "TypeUpdateCustomerPartyListResponseDataAreaType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        name: "WL5G3N1:DataArea",
        type: "UpdateCustomerPartyListResponseDataAreaType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  EBMHeader: {
      type: "TypeEBMHeaderType",
      wsdlDefinition: {
        name: "WL5G3N2:EBMHeader",
        type: "EBMHeaderType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    versionID: {
      type: "TypeStringType",
      wsdlDefinition: {
        name: "versionID",
        type: "StringType",
        use: "optional",
        attribute: true,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    languageCode: {
      type: "TypeLanguageCodeType",
      wsdlDefinition: {
        default: "en-US",
        name: "languageCode",
        type: "LanguageCodeType",
        use: "optional",
        attribute: true,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DataArea: {
      type: "TypeUpdateCustomerPartyListResponseDataAreaType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        name: "WL5G3N1:DataArea",
        type: "UpdateCustomerPartyListResponseDataAreaType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeUpdateCustomerPartyListResponseEBMType;
Modeler.register(TypeUpdateCustomerPartyListResponseEBMType, "TypeUpdateCustomerPartyListResponseEBMType");
