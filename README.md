UPDATE: The Personal Genome Browser service has been moved to https://pgbrowser.nebulagene.com/

LJ Nov.11 2019 
##############################

Local Installation Instruction of Personal Genome Browser

##############################

The Personal Genome Browser (PGB) can be installed in Linux/Mac OSX environment. 

1. JAVA 6 and Tomcat 6 or later versions should be ready on the server.

Here are installation instruction for

JAVA:
http://www.java.com/en/download/help/index_installing.xml

Tomcat:
https://tomcat.apache.org/tomcat-6.0-doc/index.html

2. Extract the PGB package, move the PGB package into 'webapps' folder 
or any other 'appBase' folder set in server.xml of Tomcat.

3. Edit the config.xml.template to set built-in tracks of the PGB. The 
config.xml file records each track's id, group, path, default display mode, 
and type, 

Track IDs are the unique identifier to access the track. 

Tracks are organized in groups. Only tracks in 'Personal Genome' group can 
be shown in the 'Select Individual' window and further be displayed in 
individual genome panel. 

In the track management area, tracks in the same group are organized 
together under the same drop-down menu.

Track link should be the absolute path of track files. User can either 
specify one file to a track, or specify multiple files for different 
chromosomes of a track.

In the config.xml.template file, paths of attached annotations and databases
is '/pgbdata/....'. Users can simply put the attached 'pgbdata' folder in 
'/'. Then the absolute path of attached data in config.xml.template is no
need to be modified.

If the Track file has an index file, such as '.tbi', '.bai', '.fai', etc., 
the index file must be stored in the same folder as the track file, and 
the index file name must be 'full data file name' + standard suffix. Tomcat6 
should have the permit to read the track files, otherwise the tracks cannot 
be displayed in the PGB.

Tracks are displayed in dense/pack mode, or hided based on the value of 
default display mode.

In order to apply appropriate module to parse the track data, the PGB uses 
values set in the 'type' tag in each track record. Currently, FASTA, BEDGZ 
(Bgzip/Tabix compressed/indexed bed), bigBed (BB), bigWig (BW), BAM, and 
Bgzip/Tabix compressed/indexed VCF, GVF, ANNO, GRF, GDF file formats are 
supported by PGB.

4. In addition, tracks in 'Basic' groups, Annovar and its databases, and 
Gene annotations are essential data/tool for the PGB, which are required 
to be prepared in prior. The PGB package includes cytoBands, HGNC Genes, 
refSeq Genes, known Genes, ensembl Genes, and OMIM database. dbSNP138, 
hg19 reference sequence, and SIFT/PolyPhen2 databases for Annovar must be 
downloaded before running the PGB..
	
a) dbSNP Build 138 (latest version)
ftp://ftp.ncbi.nih.gov/snp/organisms/human_9606/VCF/00-All.vcf.gz
ftp://ftp.ncbi.nih.gov/snp/organisms/human_9606/VCF/00-All.vcf.gz.tbi

dbSNP should be used in the 'Basic' track 'Snp'. In the config.xml.template 
we use a chr21 data from dbSNP_CEU population as demo.

b) hg19 Reference sequence
ftp://hgdownload.soe.ucsc.edu/goldenPath/hg19/chromosomes/
Please uncompress and merge all the Karyotype and mitochondria chromosome 
sequence into a single FASTA file. Then using software such as SAMtools 
(http://samtools.sourceforge.net/samtools.shtml#3) to generate a '.fai' 
index file.
"samtools faidx hg19.fa"

c) SIFT and PolyPhen2 pre-calculated score database required by Annovar 
(http://www.openbioinformatics.org/annovar/annovar_startup.html)
User can running annovar to download data files:
cd /pgbdata/annovar/
perl annotate_variation.pl -buildver hg19 -downdb -webfrom annovar ljb_pp2 humandb/
perl annotate_variation.pl -buildver hg19 -downdb -webfrom annovar ljb_sift humandb/

d) dbSNP_CHB is also in the config.xml.template in a multiple files track 
manner. The corresponding files can be download from:
ftp://ftp.ncbi.nih.gov/snp/organisms/human_9606/VCF/ByPopulation/

e) The PGB also hold a copy of above files for users' needs:
http://www.pgbrowser.org/data/dbsnp138.hg19.sorted.vcf.gz
http://www.pgbrowser.org/data/dbsnp138.hg19.sorted.vcf.gz.tbi
http://www.pgbrowser.org/data/hg19.tar.gz
http://www.pgbrowser.org/data/annovar.humandb.tar.gz
http://www.pgbrowser.org/data/dbsnp_CEU.tar.gz

Users can also integrate their own data into PGB by customizing the 
config.xml.template file.

5. After customizing the config.xml.template file, rename it to 'config.xml' 
and restart the Tomcat service to apply the changes.

6. Visit http://Your IP or Domain(:8080)/PGB/ to explore genomes in PGB.

Please feel free to contact pgbrowser@gmail.com for any further questions.

LJ Apr.3 2014
